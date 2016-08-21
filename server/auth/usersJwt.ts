import app = require('express');
import User = require('./models/usersJwt');
import bcrypt = require('bcrypt');
import jwt = require('jwt-simple');
import config = require('./config/keyJwt');

interface userSch {
    username: string;
    password: string;
}

let router = app.Router();

router.get('/', (req, res, next) => {
  if (!req.headers['x-auth']) {
    return res.send(401)
  }
  let auth = jwt.decode(req.headers['x-auth'], config.secret)
  User.findOne({username: auth.username}, (err, user) => {
    if (err) { return next(err) }
    res.json(user)
  })
})
router.post('/', (req, res, next) => {
  let user = new User({username: req.body.username});
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) { return next(err) }
    user.password = hash
    user.save(function (err) {
      if (err) { return next(err) }
      res.send(201)
    })
  })
})
export = router;

//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145