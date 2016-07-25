"use strict";
var express = require('express');
var path = require('path');
var port = process.env.PORT || 3000;
var app = express();
app.use('/src', express.static(path.resolve(__dirname + '/../src/')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
//app.use('/libs', express.static(path.resolve(__dirname + '/../src/libs')));
console.info("path.resolve(__dirname + 'libs') %s - %s", path.resolve(__dirname + '/../src/libs'), __dirname);
// let dbURI = 'mongodb://localhost:27017/cmsDB'; 
// mongoose.connect(dbURI); 
// mongoose.connection.on('connected', function () {  
//   console.log('Mongoose default connection open to ' + dbURI);
// }); 
// mongoose.connection.on('error',function (err) {  
//   console.log('Mongoose default connection error: ' + err);
// }); 
// mongoose.connection.on('disconnected', function () {  
//   console.log('Mongoose default connection disconnected'); 
// });
// process.on('SIGINT', function() {  
//   mongoose.connection.close(function () { 
//     console.log('Mongoose default connection disconnected through app termination'); 
//     process.exit(0); 
//   }); 
// }); 
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../src/index.html'));
};
// app.use('/api/sessions', require('./controllers/api/sessionsJwt'));
// app.use('/api/users', require('./controllers/api/usersJwt'));
app.get('/*', renderIndex);
app.post('/form', function (req, res) {
    console.log(req.body);
});
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
