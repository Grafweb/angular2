import mongoose = require('mongoose');
import handleError = require('../../shared/error');
import bcrypt = require('bcrypt');
//import { crypt } from 


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
  password: { type: String, select: false }
});

export let UserRegistryModel = mongoose.model<IUser>('User', userRegistry);

// export function save(data) {
// let hash =  crypto.createHash('sha256');

//   hash.update(data.password);
//   data.password = hash.digest('hex');
//   console.info(data.password + " - data.password");
//   let dataSave = new UserRegistryModel(data);
//   dataSave.save(function (err:string) {
//     if (err) handleError(err);
//   });
// }
