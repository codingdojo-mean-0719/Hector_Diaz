var express = require('express');
var session = require('express-session');
var parser = require('body-parser');

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

app.get("/",(request,response)=>{
    response.render('index')
})

app.post("/submit", function(request,response){
    request.session.name = request.body.name;
    request.session.dojo = request.body.dojo;
    request.session.favLanguage = request.body.favLanguage;
    request.session.comment = request.body.comment;
    response.redirect('/result');
})

app.get('/result',(request,response)=>{
    response.render('result',{name:request.session.name,location:request.session.dojo,language:request.session.favLanguage,comment:request.session.comment});
})

app.listen(8000,()=>{console.log('listening on port 8000')});