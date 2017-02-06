"use strict";
var app = require('express');
var page_1 = require('./models/page');
var handleError = require('../shared/error');
var router = app.Router();
router.use(function timeLog(req, res, next) {
    next();
});
router.post('/', function (req, res, next) {
    console.info("to jest post session");
    console.log("req.body " + req.body);
    console.dir(req.body);
    var dataSave = new page_1.PageModel(req.body);
    dataSave.save(function (err) {
        if (err)
            handleError(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
