const express         = require('express');
const mongoose        = require('mongoose');
const guestlistRoutes    = express.Router();

Guest = require('../models/Guest.model')


// Get complete guestlist
guestlistRoutes.get('/guestlist', (req, res, next) => {
  Guest.find()
  // .populate('owner')
  .then( response => {
    res.json(response);
  })
  .catch( err => {
    res.status(500).json(err)
  });
})

// Create a new guest
guestlistRoutes.post('/guestlist', (req, res, next) => {

  const {guestFirstName, guestLastName, contact, tag} = req.body

  Guest.create({
    guestFirstName, 
    guestLastName, 
    contact, 
    tag
  })
  // .populate('owner')
  .then( response => {
    res.json(response);
  })
  .catch( err => {
    res.status(500).json(err)
  });
})


// Get a single guest
guestlistRoutes.get('/guestlist/:guestId', (req, res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.guestId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Guest.findById(req.params.guestId)
  .populate('owner')
  .then(event => {
    res.status(200).json(event)
  })
  .catch( err => {
    res.status(500).json(err)
  })

})


// Update a single guest
guestlistRoutes.put('/guestlist/:guestId', (req ,res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.guestId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Guest.findByIdAndUpdate(req.params.guestId, req.body)
  .then(() => {
    res.json({ message: `Guest with ${req.params.guestId} is updated successfully.` });
  })
  .catch(error => {
    res.status(500).json(error);
  });

})

// Delete a single guest
guestlistRoutes.delete('/guestlist/:guestId', (req ,res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.guestId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Guest.findByIdAndRemove(req.params.guestId)
    .then( () => {
      res.json({ message: `Guest with ${req.params.guestId} is deleted successfully.` });
    } )
    .catch(error => {
      res.status(500).json(error);
    });


})

module.exports = guestlistRoutes;