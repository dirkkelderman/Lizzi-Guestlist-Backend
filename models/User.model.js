const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName : {
      type: String,
      trim: true,
    },
    lastName : {
      type: String,
      trim: true,
    },
    imageUrl:{
      type: String,
      default: "http://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
    },
    email: {
      type: String,
      // required: [true, 'Email is required.'],
      unique: true,
      // default: "test@email.com",
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
    }],
    confirmed: {
      type: Boolean,
      default: false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);

