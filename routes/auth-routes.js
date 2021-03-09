const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

const User = require("../models/User.model");

const nodemailer = require("nodemailer");
const templates = require('../email/templates')
const async = require('async');
const crypto = require('crypto');
const mongoose = require('mongoose');
const router  = express.Router();


authRoutes.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (!email || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  if (password.length < 8) {
    res
      .status(400)
      .json({
        message:
          "Please make your password at least 8 characters long for security purposes.",
      });
    return;
  }

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "Username check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "Username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      email: email,
      password: hashPass,
      firstName: firstName,
      lastName: lastName,
    });

    aNewUser.save((err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      req.login(aNewUser, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

// Route to request reset token
authRoutes.post('/forgot', (req, res, next) => {
  
  async.waterfall([ (done) => {
      crypto.randomBytes(20, (err, buf) => {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    (token, done) => {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
          res.status(500).json({ message: "No account with that email address exists." });
          return
          // req.flash('error', 'No account with that email address exists.');
          // return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });

        res.status(200).json({ message: "Token saved" })
        return
      });
    }, (token, user, done) => {
      let host = req.headers.host
      let resetToken = token

      
      let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
      let mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Password Reset',
        html: templates.passwordReset(host, resetToken),
      };
      smtpTransport.sendMail(mailOptions, (err) => {
        
        // res.status(200).json({message: 'An e-mail has been sent to ' + user.email + ' with further instructions.'})
        // req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
      // return res.status(200).json({ message: "Email is send" })
    }
  ], (err) => {
    
      console.log(err);
      res
        .status(500)
        .json({ message: "Saving user to database went wrong." });
      return;
    
    // if (err) return next(err);
    // res.redirect('/forgot');
  });
});



module.exports = authRoutes;
