const express = require('express');
const parser = require('body-parser');

app = express();

app.listen(5001, () => console.log('listening on port 5001'));

app.use(express.static(__dirname + '/public/dist/public'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

require('./server/config/mongoose');
app.use('/cakes', require('./server/config/routes'));
