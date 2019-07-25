const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// get all the files in a varibale called models
const models = path.join(__dirname, '../models');
//connect to mongo db baker collection
mongoose.connect('mongodb://localHost/Bakers', { useNewUrlParser: true });
//give a successful connnection message when mongoose is connect.
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

fs.readdirSync(models)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(models, file)));
