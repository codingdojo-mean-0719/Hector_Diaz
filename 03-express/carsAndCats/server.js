var express = require("express");

var app = express();

app.use(express.static(__dirname + "/static"))

app.get('/cars.html')
app.get('/cats.html')
app.get('/form.html')

app.listen(8000, function(){
    console.log("listening on port 8000")
})