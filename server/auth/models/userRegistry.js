"use strict";
var mongoose = require('mongoose');
var userRegistry = new mongoose.Schema({
    username: String,
    surname: String,
    email: String,
    password: { type: String, select: false }
});
exports.UserRegistryModel = mongoose.model('User', userRegistry);
