var express = require("express");
var session = require('express-session');
var parser = require("body-parser")

var app = express();

app.set('views',__dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));
app.use(parser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.get('/cars', function(request,response){
    response.render('cars');
});

app.get('/cats', function(request,response){
    response.render('cats');
});

app.get('/cat', function(request,response){
    var name = "A Cat",
    catPictuer = Math.floor(Math.random()*3)
    age = "3",
    napSpot = ['sleeping spor', 'napping spot'];
    response.render('aCat',{name:name,age:age,napSpot:napSpot,catpic:catPictuer});
});

app.get('/cars/new', function(request,response){
    response.render('form');
});

app.get("/reset", function(request,response){
    request.session.counter = null;
    response.redirect('/counter');
});

app.get('/counter', function(request,response){
    if(!request.session.counter){
        request.session.counter = 1;
    }else{
        request.session.counter ++;
    }
    response.render('counter',{counter:request.session.counter});
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});