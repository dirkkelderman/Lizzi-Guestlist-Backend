const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      // required: [true, 'Username is required.'],
      unique: true
    },
    imageUrl: String,
    email: {
      type: String,
      // required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      // required: [true, 'Password is required.']
    },
    event: [{
      type: Schema.Types.ObjectId,
      ref: 'Event',
    }]
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);

