"use strict";
var app = require('express');
var router = app.Router();
router.use(function timeLog(req, res, next) {
    next();
});
router.post('/', function (req, res, next) {
    console.info("to jest post session");
    console.log("req.body " + req.body);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
