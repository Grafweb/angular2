"use strict";
var mongoose = require('mongoose');
var userRegistry = new mongoose.Schema({
    _id: { type: String, select: false },
    username: String,
    surname: String,
    email: String,
    password: { type: String, select: false },
    app_metadata: {
        roles: Array
    }
});
exports.UserRegistryModel = mongoose.model('User', userRegistry);
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
