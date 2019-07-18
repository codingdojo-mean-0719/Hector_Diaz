const express = require('express');
const parser = require('body-parser');

app = express();

app.listen(5001,()=>console.log('listening on port 5001'));

app.use(parser.json());

require('./server/models/mongoose')()
require('./server/config/routes')(app)
