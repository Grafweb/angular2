"use strict";
var mongoose = require('mongoose');
var user = new mongoose.Schema({
    username: String,
    password: { type: String, select: false }
});
var UserModel = mongoose.model('User', user);
module.exports = UserModel;
