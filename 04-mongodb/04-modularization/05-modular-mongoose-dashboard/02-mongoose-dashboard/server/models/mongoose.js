const mongoose = require('mongoose');

module.exports = function(){
  mongoose.connect('mongodb://localhost/muntjacDB',{ useNewUrlParser: true },()=>console.log('conncected to data base'))

mongoose.model('Muntjac', require('./animal')(mongoose));
}
