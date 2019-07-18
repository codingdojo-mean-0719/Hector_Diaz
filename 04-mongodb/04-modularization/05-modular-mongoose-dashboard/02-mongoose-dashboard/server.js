const express = require('express');
const parser = require('body-parser');
const path = require('path');

app = express();

app.listen(5001,()=>console.log("listening on port 5001"));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'client/static')));
app.use(parser.urlencoded({extended:true}));

require('./server/models/mongoose')();
require('./server/config/routes')(app);
