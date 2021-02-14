const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    eventName: {
      type: String,
      trim: true,
      required: [true, 'Event name is required.'],
    },
    date: {
      type: Date,
      required: [true, 'Email is required.'],
    },
    guestNumber: {
      type: Number,
      required: [true, 'Input a number of attendees']
    },
    location: {
      type: String,
      required: [true, 'Please input location of the event']
    },
    description: {
      type: Text,
    }

  },
  {
    timestamps: true
  }
);

module.exports = model('Event', eventSchema);