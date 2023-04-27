const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: 1,
    maxLength: [20, "Name cannot be bigger than 20 characters"],
  },

  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'
    ],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minLength: [8, 'Password cannot be less than 8 characters']
  }
});

UserSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(this.password, salt)
  this.password = hashedPassword
  next()
})

const User = mongoose.model('Users', UserSchema);
module.exports = User;