
const express = require('express');
const router  = express.Router();
const User = require('../models/User.model');

router.patch("/:Id", async (req, res) => {
  try {
    const updateProfile = await User.findOneAndUpdate(
      { orderId: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      success: true,
      data: updateProfile,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});