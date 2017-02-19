import mongoose = require('mongoose');

interface Pages extends mongoose.Document {
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

export let PageModel = mongoose.model< Pages >('PageModel', pageSchema);


