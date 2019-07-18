const express = require('express');
const parser =  require('body-parser');

app = express()

app.listen(5001,()=>console.log('listening on port 5001'));

app.use(parser.json());
app.use(parser.urlencoded({extended:true}))

require('./server/models/mongoose')();

require('./server/config/routes')(app)
