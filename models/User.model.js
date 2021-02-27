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
    imageUrl:{
      type: String,
      default: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    },
    email: {
      type: String,
      // required: [true, 'Email is required.'],
      // unique: true,
      default: "test@email.com",
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

