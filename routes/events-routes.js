const express         = require('express');
const mongoose        = require('mongoose');
const eventsRoutes    = express.Router();

Event = require('../models/Event.model')

// Get the complete event list
eventsRoutes.get('/events', (req, res, next) => {
  Event.find()
  // .populate('owner')
  .then( response => {
    res.json(response);
  })
  .catch( err => {
    res.status(500).json(err)
  });
})

// Create a event
eventsRoutes.post('/events', (req, res, next) => {

  const {eventName, date, guestNumber, location, description} = req.body

  if (!eventName || !date) {
    res.status(400).json({ message: 'Provide event name and date' });
    return;
  }

  Event.create({
    // owner: req.user._id,
    eventName,
    date,
    guestNumber,
    location,
    description
  })
  .then(response => {
    console.log('Event created')
    res.status(200).json(response)
  })
  .catch( err => {
    console.log(err)
    res.status(500).json(err)
  })
})

// Get a single event
eventsRoutes.get('/events/:id', (req, res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findById(req.params.id)
  .populate('owner')
  .then(event => {
    res.status(200).json(event)
  })
  .catch( err => {
    res.status(500).json(err)
  })

})

// Update a single event
eventsRoutes.put('/events/:id', (req, res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.json({ message: `Project with ${req.params.id} is updated successfully.` });
  })
  .catch(error => {
    res.status(500).json(error);
  });

})

// Delete a single event
eventsRoutes.delete('/events/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findByIdAndRemove(req.params.id)
    .then( () => {
      res.json({ message: `Project with ${req.params.id} is deleted successfully.` });
    } )
    .catch(error => {
      res.status(500).json(error);
    });

})


module.exports = eventsRoutes;
