const mongoose = require('mongoose')

module.exports = function(){
  mongoose.connect('mongodb://localHost/1955',{useNewUrlParser:true})
.then(console.log('connected to 1955 database'))
.catch(console.log)

mongoose.model('1955',require('./1955')())
}
