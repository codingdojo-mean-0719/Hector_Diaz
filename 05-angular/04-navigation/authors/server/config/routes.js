const authors = require('../controllers/authors');
const router = require('express').Router();

module.exports = router
  .get('/', authors.index)
  .get('/:id', authors.getAuthor)
  .post('/', authors.createAuthor)
  .put('/:id', authors.updateAuthor)
  .delete('/:id', authors.deleteAuthor);
