const session = require('express-session');

const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: false,
            saveUninitialized: true,
            cookie: { 
                maxAge: 6000000,
                secure: process.env.NODE_ENV === "production", 
                sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', 
            }, 
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                ttl: 60 * 60 *24
            })
        })
    );
};