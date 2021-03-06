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
    return res.send(401);
  }
  let auth = jwt.decode(req.headers['x-auth'], config.secret)
  UserRegistryModel.findOne({username: auth.username},'username surname email app_metadata', (err, user) => {
    if (err) { return next(err) }
    res.json(user);
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