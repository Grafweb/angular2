"use strict";
var app = require('express');
var jwt = require('jwt-simple');
var config = require('./config/keyJwt');
var router = app.Router();
router.get('/', function (req, res, next) {
    if (req.headers['x-auth']) {
        var auth = jwt.decode(req.headers['x-auth'], config.secret);
    }
    next();
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
