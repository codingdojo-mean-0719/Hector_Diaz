const express = require('express');
const path = require("path");
const parser = require("body-parser");
const session = require("express-session");

const app = express();

const server = app.listen(5001,()=>console.log("listening on port 5001"));

const io = require('socket.io')(server);

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "./static")));
app.use(parser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.get('/',(request,response)=>response.render('index'))

io.on('connection',(socket)=>{
    console.log('socket connected')
    socket.on('color', (data)=>{
        console.log("color trigger",data);
        io.emit('bg-color',data)
    })
})