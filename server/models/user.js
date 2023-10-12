// server/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define user schema fields (e.g., username, email, password)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
