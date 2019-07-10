var express = require("express");

var app = express();

app.set('views',__dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

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

app.listen(8000, function(){
    console.log("listening on port 8000");
});