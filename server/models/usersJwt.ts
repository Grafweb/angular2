import mongoose = require('mongoose');
let user = new mongoose.Schema({  
    username: String,
    password: {type: String, select: false} 
});
let UserModel = mongoose.model('User', user);
export =  UserModel;