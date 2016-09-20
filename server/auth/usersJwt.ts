import app = require('express');
import { UserModel } from './models/usersJwt';
import bcrypt = require('bcrypt');
import jwt = require('jwt-simple');
import config = require('./config/keyJwt');
import handleError = require('../shared/error');
import { UserRegistryModel } from './models/userRegistry';
import { crypt } from '../shared/crypto';

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
  UserRegistryModel.findOne({username: auth.username}, (err, user) => {
    if (err) { return next(err) }
    res.json(user)
  })
})
router.use(function timeLog(req, res, next) {
  next();
});

router.post('/', (req, res, next) => {
  console.info("to jest post2");
  console.log("req.body.password " + req.body.password);
  req.body.password = crypt(req.body.password);
  console.log("req.body.password2 " + req.body.password);
  let dataSave = new UserRegistryModel(req.body);
  dataSave.save(function (err:string) {
    if (err) handleError(err);
  });
});

export default router;

//https://www.youtube.com/watch?v=-_QubA7rpcg

//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145