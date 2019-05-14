const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;