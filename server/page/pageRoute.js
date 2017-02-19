"use strict";
var app = require('express');
var handleError = require('../shared/error');
var pages_1 = require('./models/pages');
var router = app.Router();
router.use(function timeLog(req, res, next) {
    next();
});
router.post('/', function (req, res, next) {
    console.info("to jest post session");
    console.log("req.body " + req.body);
    console.dir(req.body);
    var dataSave = new pages_1.PageModel(req.body);
    dataSave.save(function (err) {
        if (err)
            handleError(err);
    });
});
router.get('/', function (req, res, next) {
    console.info("to jest page/admin express");
    console.log("req.body " + req.body);
    console.dir(req.body);
    pages_1.PageModel.find({}).exec(function (err, data) {
        console.info("data" + data);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
