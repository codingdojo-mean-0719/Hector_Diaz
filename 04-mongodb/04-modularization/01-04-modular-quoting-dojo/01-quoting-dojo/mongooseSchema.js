const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost/QoutingDojo',{ useNewUrlParser: true }, ()=>console.log('connected to database'))
mongoose.connection.on('connected',()=>console.log('connected to mongodb'))


const QouteSchema = new mongoose.Schema({
  qoute:String,
  author:String,
},{timestamps:{createdAt:' enterd'}})

const quotes = mongoose.model('Qoote', QouteSchema)

