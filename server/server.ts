import express = require('express');
import mongoose = require('mongoose');
import mongooseConnect = require('./shared/mongoDB');
import path = require('path');
import crypto = require('crypto');
import bodyParser = require('body-parser');
import saveData = require('./auth/models/userRegistry');

let port: number = process.env.PORT || 3000;
let app = express();

app.use('/src', express.static(path.resolve(__dirname + '/../src/')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//app.use('/libs', express.static(path.resolve(__dirname + '/../src/libs')));

console.info("path.resolve(__dirname + 'libs') %s - %s", path.resolve(__dirname + '/../src/libs'), __dirname);

mongooseConnect.mongoConnect();

let renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname  + '/../src/index.html'));
}

// app.use('/api/sessions', require('./controllers/api/sessionsJwt'));
// app.use('/api/users', require('./controllers/api/usersJwt'));

app.get('/*', renderIndex);

app.post('/form', (req, res) => {
console.log("req.body " + req.body);
saveData(req.body);
});
 
let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});