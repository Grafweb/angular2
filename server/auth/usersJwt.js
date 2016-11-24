"use strict";
var app = require('express');
var jwt = require('jwt-simple');
var config = require('./config/keyJwt');
var handleError = require('../shared/error');
var userRegistry_1 = require('./models/userRegistry');
var crypto_1 = require('../shared/crypto');
var router = app.Router();
router.get('/', function (req, res, next) {
    if (!req.headers['x-auth']) {
        return res.send(401);
    }
    var auth = jwt.decode(req.headers['x-auth'], config.secret);
    userRegistry_1.UserRegistryModel.findOne({ username: auth.username }, 'username surname email', function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user);
    });
});
router.use(function timeLog(req, res, next) {
    next();
});
router.post('/', function (req, res, next) {
    console.info("to jest post2");
    console.log("req.body.password " + req.body.password);
    req.body.password = crypto_1.crypt(req.body.password);
    console.log("req.body.password2 " + req.body.password);
    var dataSave = new userRegistry_1.UserRegistryModel(req.body);
    dataSave.save(function (err) {
        if (err)
            handleError(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
// // find one iphone adventures - iphone adventures??
// Adventure.findOne({ type: 'iphone' }, function (err, adventure) {});
// // same as above
// Adventure.findOne({ type: 'iphone' }).exec(function (err, adventure) {});
// // select only the adventures name
// Adventure.findOne({ type: 'iphone' }, 'name', function (err, adventure) {});
// // same as above
// Adventure.findOne({ type: 'iphone' }, 'name').exec(function (err, adventure) {});
// // specify options, in this case lean
// Adventure.findOne({ type: 'iphone' }, 'name', { lean: true }, callback);
// // same as above
// Adventure.findOne({ type: 'iphone' }, 'name', { lean: true }).exec(callback);
// // chaining findOne queries (same as above)
// Adventure.findOne({ type: 'iphone' }).select('name').lean().exec(callback);
//https://www.youtube.com/watch?v=-_QubA7rpcg
//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145 
