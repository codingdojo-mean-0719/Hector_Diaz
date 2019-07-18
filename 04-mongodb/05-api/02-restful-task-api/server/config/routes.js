const task = require('../controllers/tasks');
module.exports = function(app) {
  app.get('/');
  app.get('/tasks', (request, response) => {
    task.index(response);
  });
  app.get('/tasks/:id', (request, response) => {
    task.show(request, response);
  });
  app.post('/tasks', (request, response) => {
    task.create(request, response);
  });
  app.put('/tasks/:id', (request, response) => {
    task.update(request, response);
  });
  app.delete('/tasks/:id', (request, response) => {
    task.delete(request, response);
  });
};
