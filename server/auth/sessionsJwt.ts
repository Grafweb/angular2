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

router.post('/', (req, res, next) => {
  User.findOne({username: req.body.username})
  .select('password').select('username')
  .exec((err:any, user:userSch) => {
    if (err) { return next(err) }
    if (!user) { return res.send(401) }
    bcrypt.compare(req.body.password, user.password, (err, valid) => {
      if (err) { return next(err) }
      if (!valid) { return res.send(401) }
      let token = jwt.encode({username: user.username}, config.secret)
      res.send(token)
    })
  })
})
export = router;