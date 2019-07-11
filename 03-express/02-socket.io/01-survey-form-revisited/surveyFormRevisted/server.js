const express = require('express');
const session = require('express-session');
const parser = require('body-parser');

const app = express();
// app.use(express.static(__dirname + "/index.ejs"))

const server = app.listen(8000,()=>{console.log('listening on port 8000')});
const io = require('socket.io')(server);
let luckyNumber = 0;

io.on('connection',socket=>{
    console.log("socket running")

     socket.on('post', data=>{
         luckyNumber = Math.floor(Math.random()*1001);
         console.log('server emitting'),
         socket.emit('get', data);
         socket.emit('YourLuckyNumber', {number:`Your lucky number is: ${luckyNumber}`});
    });
})

app.set(__dirname + "static/style.css");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(parser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));


