
const express = require('express');
const router  = express.Router();
const User = require('../models/User.model');

router.patch("/profile/:_id", async (req, res) => {
  console.log(req.body)
  try {
    const updateProfile = await User.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true },
    );
    
    res.status(200).send({
      success: true,
      data: updateProfile,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


module.exports = router;