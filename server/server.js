"use strict";
var express = require('express');
var mongooseConnect = require('./shared/mongoDB');
var path = require('path');
var bodyParser = require('body-parser');
var sessionsJwt_1 = require('./auth/sessionsJwt');
var usersJwt_1 = require('./auth/usersJwt');
var auth_1 = require('./auth/auth');
var pageRoute_1 = require('./page/pageRoute');
var port = process.env.PORT || 3000;
var app = express();
app.use('/src', express.static(path.resolve(__dirname + '/../src/')));
app.use('/node_modules', express.static(path.resolve(__dirname + '/../node_modules')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/logins', sessionsJwt_1.default);
app.use('/user', usersJwt_1.default);
app.use('/admin', auth_1.default);
app.use('/admin/*', auth_1.default);
app.use('/admin/page', pageRoute_1.default);
//app.use('/libs', express.static(path.resolve(__dirname + '/../src/libs')));
console.info("path.resolve(__dirname + 'libs') %s - %s", path.resolve(__dirname + '/../src/libs'), __dirname);
mongooseConnect.mongoConnect();
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../src/index.html'));
};
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
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
