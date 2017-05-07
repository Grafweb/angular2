"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
//import { Page, PageData }  from './../../../src/';
// export interface Page {
//   title_meta: string;
//   description_meta: string;
//   keywords_meta: string;
//   title: string;
//   foto: Array<string>;
//   content: string;
// }
var Page = (function () {
    function Page() {
    }
    return Page;
}());
exports.Page = Page;
var pageSchema = new mongoose.Schema({
    title_meta: String,
    description_meta: String,
    keywords_meta: String,
    title: String,
    foto: Array,
    content: String
});
exports.PageModel = mongoose.model('page', pageSchema);
