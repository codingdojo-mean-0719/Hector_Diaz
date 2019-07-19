const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const models = path.join(__dirname, '../models');
mongoose.connect('mongodb://localHost/tasks', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

fs.readdirSync(models)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(models, file)));
