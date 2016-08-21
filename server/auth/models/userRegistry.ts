import mongoose = require('mongoose');

interface IUser extends mongoose.Document {
  id: string;
  username: string;
  surname: string;
  email: string;
  password: string;
}


let userRegistry = new mongoose.Schema({  
    username: String,
    surname: String,
    email: String,
    password: {type: String, select: false} 
});

export let UserRegistryModel = mongoose.model< IUser >('User', userRegistry);
