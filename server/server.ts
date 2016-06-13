import express = require('express');
import mongoose = require('mongoose');
import path = require('path');
import crypto = require('crypto');

let port: number = process.env.PORT || 3000;
let app = express();

app.use('/src', express.static(path.resolve(__dirname + '/../src/')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
//app.use('/libs', express.static(path.resolve(__dirname + '/../src/libs')));

console.info("path.resolve(__dirname + 'libs') %s - %s", path.resolve(__dirname + '/../src/libs'), __dirname);

let dbURI = 'mongodb://localhost:27017/cmsDB'; 
mongoose.connect(dbURI); 
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 
 
 
let renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname  + '/../src/index.html'));
}

// app.use('/api/sessions', require('./controllers/api/sessionsJwt'));
// app.use('/api/users', require('./controllers/api/usersJwt'));

app.get('/*', renderIndex);
 
let server = app.listen(port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('This express app is listening on port:' + port);
});