import app = require('express');
import { PageModel } from './models/page';

let router = app.Router();

router.use(function timeLog(req, res, next) {
  next();
});

router.post('/', (req, res, next) => {
  console.info("to jest post session");
  console.log("req.body " + req.body);
});

export default router;
