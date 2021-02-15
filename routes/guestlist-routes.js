const express         = require('express');
const mongoose        = require('mongoose');
const guestlistRoutes    = express.Router();

Event = require('../models/Guest.model')



guestlistRoutes.get('/guestlist', (req, res, next) => {
  res.status(200).json({message: 'Route works'})
})



module.exports = guestlistRoutes;