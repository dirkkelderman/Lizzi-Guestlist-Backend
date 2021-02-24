const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const guestSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
    guestFirstName: {
      type: String,
      trim: true,
      // required: [true, 'First name is required.'],
    },
    guestLastName: {
      type: String,
      trim: true,
      // required: [true, 'Last name is required.'],
    },
    contact: {
      type: String,
      // required: [true, 'Input an email of the guest']
    },
    tag: {
      type: String,
    },
    ticketNumber: {
      type: Number
    },
    freeTickets: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Guest', guestSchema);