import app = require('express');
import { PageModel } from './models/page';
import handleError = require('../shared/error');

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

export default router;
