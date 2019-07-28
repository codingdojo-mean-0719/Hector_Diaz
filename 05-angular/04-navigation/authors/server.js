const session = require('express-session');
const cookie = require('cookie-parser');
const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

const {
  env: { PORT: port = 5001 },
} = process;

require('./server/config/mongoose');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cookie('LKLKJDSFLKAIKOOWEFOJHFAWOH'));
app.use(
  session({
    saveUninitialized: true,
    secret: 'do good,be good',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 6000000,
    },
  })
);
app.use(require('./server/config/api.routes'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
