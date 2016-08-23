import mongoose = require('mongoose');
import handleError = require('../../shared/error');


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

let UserRegistryModel = mongoose.model<IUser>('User', userRegistry);


export = function save(data) {
  let dataSave = new UserRegistryModel(data);
  dataSave.save(function (err:string) {
    if (err) handleError(err);
  });
}
