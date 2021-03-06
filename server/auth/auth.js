"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("express");
var jwt = require("jwt-simple");
var config = require("./config/keyJwt");
var router = app.Router();
router.use(function (req, res, next) {
    console.info("wyk auth");
    next();
});
router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        //return res.send(401);
        res.redirect("/login");
    }
    if (req.headers['x-auth']) {
        console.info("jestes zalogowany");
        var auth = jwt.decode(req.headers['x-auth'], config.secret);
        console.info("wyk auth dir");
        console.dir(auth);
        next();
    }
});
exports.default = router;
