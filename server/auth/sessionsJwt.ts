import app = require('express');
import { UserModel } from './models/usersJwt';
import bcrypt = require('bcrypt');
import jwt = require('jwt-simple');
import config = require('./config/keyJwt');
import { UserRegistryModel } from './models/userRegistry';
import { crypt } from '../shared/crypto';

interface userSch {
    username: string;
    password: string;
}

let router = app.Router();

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

router.post('/', (req, res, next) => {
  console.info("to jest post session");
  console.log("req.body " + req.body);
  UserRegistryModel.findOne({username: req.body.username})
    .select('password').select('username')
    .exec((err:any, user:userSch) => {
      
      console.info("err session" + err);
      console.info("user.username" + user.username);
      
      if (err) { return next(err) }
      if (!user) { return res.send(401) }
      let userPassword = crypt(req.body.password);
      let comparePassword = user.password;
      if(userPassword == comparePassword) {
        console.info("gotowy do logowania");
        let token = jwt.encode({username: user.username}, config.secret);
        console.info("token " + token);
        //res.send(token);
         res.json(token);
      } else {  
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

export default router;

//https://www.youtube.com/watch?v=-_QubA7rpcg

//https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
//https://github.com/ncb000gt/node.bcrypt.js/issues/340
//https://www.microsoft.com/pl-pl/download/details.aspx?id=48145