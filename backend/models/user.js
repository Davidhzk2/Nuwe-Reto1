const mongoose = require('mongoose');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    name: String,
    username: {type: String, unique: true},
    email: { type: String, unique:true},
    password: {type: String},
    github: {
        username: String,
        url: String,
        repository_count: String
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User;