const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
