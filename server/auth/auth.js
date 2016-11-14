"use strict";
var app = require('express');
var jwt = require('jwt-simple');
var config = require('./config/keyJwt');
var router = app.Router();
router.use(function (req, res, next) {
    if (!req.headers['x-auth']) {
        return res.send(401);
    }
    if (req.headers['x-auth']) {
        console.info("jestes zalogowany");
        var auth = jwt.decode(req.headers['x-auth'], config.secret);
    }
    console.info("wyk auth");
    next();
});
router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        console.info("niezalogowany");
    }
    else {
        console.info("zalogowany");
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
