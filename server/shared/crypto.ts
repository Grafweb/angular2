import crypto = require('crypto');


export let crypt = (password) => {
  let hash =  crypto.createHash('sha256');
  hash.update(password);
  password = hash.digest('hex');
  return password; 
}