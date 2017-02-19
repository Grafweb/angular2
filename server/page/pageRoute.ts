import app = require('express');
import handleError = require('../shared/error');
import { PageModel } from './models/pages';

let router = app.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.post('/', (req, res, next) => {
  console.info("to jest post session");
  console.log("req.body " + req.body);
  console.dir(req.body);

  let dataSave = new PageModel(req.body);
  dataSave.save(function (err:string) {
    if (err) handleError(err);
  });
});


router.get('/', (req, res, next) => {
  console.info("to jest page/admin express");
  console.log("req.body " + req.body);
  console.dir(req.body);

  PageModel.find({}).exec((err:string, data) => {
    console.info("data" + data);
  });
  
});

export default router;
