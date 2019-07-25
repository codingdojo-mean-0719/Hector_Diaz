const bakers = require('../controllers/bakers');
const router = require('express').Router();

module.exports = router
  .get('/', bakers.getCakes)
  .get('/:id', bakers.getCake)
  .post('/', bakers.createCake)
  .put('/:id', bakers.createOpinion);
