"use strict";
var crypto = require('crypto');
exports.crypt = function (password) {
    var hash = crypto.createHash('sha256');
    hash.update(password);
    password = hash.digest('hex');
    return password;
};
