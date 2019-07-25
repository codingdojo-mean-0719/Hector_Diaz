const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const CakeSchema = new Schema({
  baker: {
    type: String,
    required: true,
  },
  cakeImg: {
    type: String,
    require: true,
  },
  opinions: [{ comment: String, rating: Number }],
});

module.exports = mongoose.model('Cake', CakeSchema);
