const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 15
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 15
  }
});


module.exports = mongoose.model('User', userSchema);