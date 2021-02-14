const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
    guestFirstName: {
      type: String,
      trim: true,
      required: [true, 'First name is required.'],
    },
    guestLastName: {
      type: String,
      trim: true,
      required: [true, 'Last name is required.'],
    },
    constact: {
      type: Text,
      required: [true, 'Input an email of the guest']
    },
    tag: {
      type: Text,
    }

  },
  {
    timestamps: true
  }
);

module.exports = model('Guest', guestSchema);