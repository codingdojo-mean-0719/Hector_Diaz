const express = require('express');

app = express();

app.use(express.static(__dirname + '/public/dist/public'));

app.listen(5001, () => console.log('listening on port 5001'));

app.get('/');
