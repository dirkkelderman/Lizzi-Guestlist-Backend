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
    }

  },
  {
    timestamps: true
  }
);

module.exports = model('Event', eventSchema);