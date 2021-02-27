const express         = require('express');
const mongoose        = require('mongoose');
const router  = express.Router();
const User = require('../models/User.model');

router.get('/profile/:id', (req, res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch( err => {
    res.status(500).json(err)
  })

})
module.exports = router;