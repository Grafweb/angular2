import express = require('express');
import mongoose = require('mongoose');
import mongooseConnect = require('./shared/mongoDB');
import path = require('path');
import crypto = require('crypto');
import bodyParser = require('body-parser');
import { UserRegistryModel } from './auth/models/userRegistry';
import sessionsJwt from './auth/sessionsJwt';
import usersJwt from './auth/usersJwt';
import auth from './auth/auth';

let port: number = process.env.PORT || 3000;
let app = express();

app.use('/src', express.static(path.resolve(__dirname + '/../src/')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/logins', sessionsJwt);
app.use('/user', usersJwt);
//app.use(auth); 
//app.use('/libs', express.static(path.resolve(__dirname + '/../src/libs')));



console.info("path.resolve(__dirname + 'libs') %s - %s", path.resolve(__dirname + '/../src/libs'), __dirname);

mongooseConnect.mongoConnect();

let renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname  + '/../src/index.html'));
}

// app.use('/api/sessions', require('./controllers/api/sessionsJwt'));
// app.use('/api/users', require('./controllers/api/usersJwt'));

app.get('/*', renderIndex);

// app.post('/form', (req, res) => {
// console.log("req.body " + req.body);
// //new saveData.save(req.body);
// });

// app.post('/login', (req, res) => {
// console.log("req.body " + req.body);
// new saveData.save(req.body);
// });
 
let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});