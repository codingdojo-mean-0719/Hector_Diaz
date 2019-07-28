const auhtorRoutes = require('express').Router();
const apiRouter = require('express').Router();
const routes = require('./routes');

auhtorRoutes.use('/authors', routes);
module.exports = apiRouter
  .use('/api/v1', auhtorRoutes)
  .use(require('./catchall.route'));
