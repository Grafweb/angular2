import mongoose = require('mongoose');
let user = mongoose.Schema({  username: String,  password: {type: String, select: false} })
module.exports = mongoose.model('User', user) 