const unique = require('mongoose-unique-validator');
const validator = require('validator');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const AuthorSchema = Schema({
  name: {
    type: String,
    min: 3,
    required: [true, 'please supply a user name'],
    trim: true,
    lowercase: true,
    unique: true,
  },
});

AuthorSchema.plugin(unique, { message: `{PATH} must be unique` });

module.exports = mongoose.model('Author', AuthorSchema);
