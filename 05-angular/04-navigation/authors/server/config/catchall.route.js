const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', (request, response) => {
  response.sendfile(
    path.join(__dirname, '../../public/dist/public/index.html')
  );
});
