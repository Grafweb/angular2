"use strict";
var app = require('express');
var jwt = require('jwt-simple');
var config = require('./config/keyJwt');
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
    console.info("to jest post session");
    console.log("req.body " + req.body);
    // UserRegistryModel.findOneAndUpdate({username: req.body.username}, {app_metadata: ["guest","admin"]},
    // (err, doc) => {
    //     if (err) { return next(err) }
    //     if (doc) console.info("update perform " + doc);
    //   }
    // );
    userRegistry_1.UserRegistryModel.findOne({ username: req.body.username })
        .select('password').select('username')
        .exec(function (err, user) {
        console.info("err session" + err);
        console.info("user.username" + user.username);
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send(401);
        }
        var userPassword = crypto_1.crypt(req.body.password);
        var comparePassword = user.password;
        if (userPassword == comparePassword) {
            console.info("gotowy do logowania");
            var token = jwt.encode({ username: user.username }, config.secret);
            console.info("token " + token);
            //res.send(token);
            res.json(token);
        }
        else {
            return next(err);
        }
        // bcrypt.compare(req.body.password, user.password, (err, valid) => {
        //   if (err) { return next(err) }
        //   if (!valid) { return res.send(401) }
        //   let token = jwt.encode({username: user.username}, config.secret)
        //   res.send(token)
        // })
    });
    // let user = new UserModel({username: req.body.username});
    // bcrypt.hash(req.body.password, 10, function (err, hash) {
    //   if (err) { return next(err) }
    //   user.password = hash
    //   user.save(function (err) {
    //     if (err) { return next(err) }
    //     res.send(201)
    //   })
    // });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//https://www.youtube.com/watch?v=-_QubA7rpcg
//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145 
