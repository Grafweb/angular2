import mongoose = require('mongoose');
//import { Page, PageData }  from './../../../src/';

export interface Page {
  title_meta: string;
  description_meta: string;
  keywords_meta: string;
  title: string;
  content: string;
}

interface Pages extends Page, mongoose.Document {
}


let pageSchema = new mongoose.Schema({  
    title_meta: String,
    description_meta: String,
    keywords_meta: String,
    title: String,
    content: String 
});

export let PageModel = mongoose.model< Pages >('page', pageSchema);


