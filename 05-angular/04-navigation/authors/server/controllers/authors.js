const Author = require('mongoose').model('Author');
const { Http } = require('@status/codes');
module.exports = {
  index(request, response) {
    console.log('index triggerd');
    Author.find({})
      .then(authors => {
        console.log('then trigger');
        response.json({ message: 'success', authors: authors });
      })
      .catch(error => response.status(Http.UnprocessableEntity).json(error));
  },
  getAuthor(request, response) {
    Author.find({ _id: request.params.id })
      .then(author => {
        response.json({ message: 'success', author: author });
      })
      .catch(error => response.status(Http.UnprocessableEntity).json(error));
  },
  createAuthor(request, response) {
    Author.create(request.body)
      .then(author => {
        response.json({
          message: 'successfully created an author',
          author: author,
        });
      })
      .catch(error => {
        response.json(error);
      });
  },
  updateAuthor(request, response) {
    Author.findOneAndUpdate({ _id: request.params.id }, request.body)
      .then(result =>
        response.json({
          message: 'success fully updated an author',
          result: result,
        })
      )
      .catch(error => response.json(error));
  },
  deleteAuthor(request, response) {
    Author.findByIdAndDelete({ _id: request.params.id })
      .then(result =>
        response.json({
          message: 'successfully deleted an author',
          result: result,
        })
      )
      .catch(error => response.status(Http.Unproccessable).json(error));
  },
};
