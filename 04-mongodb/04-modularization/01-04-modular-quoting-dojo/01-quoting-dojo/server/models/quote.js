const mongoose =  require('mongoose')


module.exports = function(){
mongoose.connect('mongodb://localhost/QoutingDojo',{ useNewUrlParser: true }, ()=>console.log('connected to database'))
mongoose.connection.on('connected',()=>console.log('connected to mongodb'))


const QouteSchema = new mongoose.Schema({
  qoute:String,
  author:String,
},{timestamps:{createdAt:' enterd'}})

mongoose.model('Qoote', QouteSchema)
}
