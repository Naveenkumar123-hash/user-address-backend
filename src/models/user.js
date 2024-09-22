const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  addresses: [addressSchema]  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
