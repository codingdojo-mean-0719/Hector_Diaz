const mongoose =  require('mongoose')


module.exports = function(){
  mongoose.connect('mongodb://localhost/QoutingDojo',{ useNewUrlParser: true }, ()=>console.log('connected to database'))
mongoose.connection.on('connected',()=>console.log('connected to mongodb'))

mongoose.model('Qoote', require('./quote')(mongoose))
}
