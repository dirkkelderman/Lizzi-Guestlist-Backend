const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    guest: [{
      type: Schema.Types.ObjectId,
      ref: 'Guest',
    }],
    eventName: {
      type: String,
      trim: true,
      required: [true, 'Event name is required.'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required.'],
    },
    guestNumber: {
      type: Number,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('Event', eventSchema);