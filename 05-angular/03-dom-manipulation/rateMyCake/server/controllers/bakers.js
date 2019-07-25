const Cake = require('mongoose').model('Cake');

module.exports = {
  getCakes(request, response) {
    Cake.find({})
      .then(cakes =>
        response.json({
          message: 'successfully retrieved all cakes',
          cakes: cakes,
        })
      )
      .catch(console.log);
  },
  getCake(request, response) {
    Cake.findOne({ _id: request.params.id })
      .then(cake => {
        response.json({ message: 'successfully retrieved cake', cake: cake });
      })
      .catch(console.log);
  },
  createCake(request, response) {
    Cake.create(request.body)
      .then(cake => {
        response.json({ message: 'successfully created a cake', cake: cake });
      })
      .catch(console.log);
  },
  createOpinion(request, response) {
    console.log('here is the parm', request.params);
    Cake.findOneAndUpdate(
      { _id: request.params.id },
      { $push: { opinions: request.body } },
      { useFindAndModify: false }
    )
      .then(cake => {
        response.json({
          message: `successfully add an opinion to cake ${cake.baker}`,
          cake: cake,
        });
      })
      .catch(console.log);
  },
};
