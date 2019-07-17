const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost/QoutingDojo',{ useNewUrlParser: true }, ()=>console.log('connected to database'))
mongoose.connection.on('connected',()=>console.log('connected to mongodb'))


const QouteSchema = new mongoose.Schema({
  qoute:String,
  author:String,
},{timestamps:{createdAt:' enterd'}})

const Quote = mongoose.model('Qoote', QouteSchema)

const express = require('express');
const session = require('express-session');
const path = require('path');
const parser = require('body-parser');

const app = express();
const server = app.listen(5001,()=>console.log("listening on port 5001"));
const io = require('socket.io')(server);

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'static')));
app.use(parser.urlencoded({extended:true}));
app.use(session({
    secret:"do good be good",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:600000}

}))

require('./server/config/routes.js')(app);

require('./server/controllers/socket')(io);
