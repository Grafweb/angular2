import app = require('express');
import jwt = require('jwt-simple');
import config = require('./config/keyJwt');

let router = app.Router();

router.get('/', (req, res, next) => {
    if (req.headers['x-auth']) {
        let auth = jwt.decode(req.headers['x-auth'], config.secret)
    }
    next();
});

export default router;  