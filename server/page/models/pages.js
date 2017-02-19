"use strict";
var mongoose = require('mongoose');
var pageSchema = new mongoose.Schema({
    title_meta: String,
    description_meta: String,
    keywords_meta: String,
    title: String,
    content: String
});
exports.PageModel = mongoose.model('PageModel', pageSchema);
