const express         = require('express');
const mongoose        = require('mongoose');
const eventsRoutes    = express.Router();

Event = require('../models/Event.model')


eventsRoutes.get('/events', (req, res, next) => {
  Event.find()
  // .populate('guest')
  .then( response => {
    res.json(response);
  })
  .catch( err => {
    res.status(500).json(err)
  });
})

eventsRoutes.post('/events', (req, res, next) => {

  const {eventName, date, guestNumber, location, description} = req.body

  if (!eventName || !date) {
    res.status(400).json({ message: 'Provide event name and date' });
    return;
  }

  Event.create({
    // user: req.user._id,
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
    res.status(500).json(err)
  })
})

eventsRoutes.get('/events/:id', (req, res, next) => {
  
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findById(req.params.id)
    // .populate('guest')
  .then(event => {
    res.status(200).json(event)
  })
  .catch( err => {
    res.status(500).json(err)
  })

})

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
