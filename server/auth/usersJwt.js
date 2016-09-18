"use strict";
var app = require('express');
var handleError = require('../shared/error');
var userRegistry_1 = require('./models/userRegistry');
var crypto_1 = require('../shared/crypto');
var router = app.Router();
// router.get('/', (req, res, next) => {
//   if (!req.headers['x-auth']) {
//     return res.send(401)
//   }
//   let auth = jwt.decode(req.headers['x-auth'], config.secret)
//   UserModel.findOne({username: auth.username}, (err, user) => {
//     if (err) { return next(err) }
//     res.json(user)
//   })
// })
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
//https://www.youtube.com/watch?v=-_QubA7rpcg
//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145 
