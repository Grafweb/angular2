import mongoose = require('mongoose');

interface IUser extends mongoose.Document {
  id: string;
  username: string;
  password: string;
}


let user = new mongoose.Schema({  
    username: String,
    password: {type: String, select: false} 
});

export let UserModel = mongoose.model< IUser >('User', user);
