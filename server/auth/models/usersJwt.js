"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user = new mongoose.Schema({
    username: String,
    password: { type: String, select: false }
});
exports.UserModel = mongoose.model('User', user);
