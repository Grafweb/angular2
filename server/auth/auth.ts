import app = require('express');
import jwt = require('jwt-simple');
import config = require('./config/keyJwt');

let router = app.Router();

router.use((req, res, next) => {
    if (!req.headers['x-auth']) {
        return res.send(401);
    }
    if (req.headers['x-auth']) {
        let auth = jwt.decode(req.headers['x-auth'], config.secret)
    }
    console.info("wyk auth");
    next();
});

export default router;  