const Express = require('express');

const controller = require('../controllers/controller');

const router = Express.Router();

router
  .get("/get", controller.visual)
  .get('/:id', controller.idFilme)
 
module.exports = router;
