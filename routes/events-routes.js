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
  res.status(400).json({ message: 'Route works' });
})

eventsRoutes.put('/events/:id', (req, res, next) => {
  res.status(400).json({ message: 'Route works' });
})

eventsRoutes.delete('/events/:id', (req, res, next) => {
  res.status(400).json({ message: 'Route works' });
})


module.exports = eventsRoutes;
