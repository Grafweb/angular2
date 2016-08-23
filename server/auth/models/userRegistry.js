"use strict";
var mongoose = require('mongoose');
var handleError = require('../../shared/error');
var userRegistry = new mongoose.Schema({
    username: String,
    surname: String,
    email: String,
    password: { type: String, select: false }
});
var UserRegistryModel = mongoose.model('User', userRegistry);
module.exports = function save(data) {
    var dataSave = new UserRegistryModel(data);
    dataSave.save(function (err) {
        if (err)
            handleError(err);
    });
};
