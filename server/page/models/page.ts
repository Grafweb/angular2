import mongoose = require('mongoose');

interface IUser extends mongoose.Document {
  title_meta: string;
  description_meta: string;
  keywords_meta: string;
  title: string;
  content: string;
}


let pageSchema = new mongoose.Schema({  
    title_meta: String,
    description_meta: String,
    keywords_meta: String,
    title: String,
    content: String 
});

export let PageModel = mongoose.model< IUser >('PageModel', pageSchema);


