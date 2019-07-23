const Task = require('mongoose').model('Task');

module.exports = {
  index(request, response) {
    Task.find({})
      .then(tasks => {
        response.json(tasks);
      })
      .catch(console.log);
  },
  show(request, response) {
    Task.findOne({ _id: request.params.id })
      .then(task => response.json({ message: 'success', task: task }))
      .catch(console.log);
  },
  create(request, response) {
    console.log('server side create task triggerd', request.body);
    Task.create(request.body)
      .then(task => {
        response.json({ message: 'successfuly add a new task', task: task });
      })
      .catch(console.log);
  },
  update(request, response) {
    console.log('server side update triggerd');
    Task.updateOne({ _id: request.params.id }, request.body, { new: true })
      .then(task => {
        response.json({ message: 'successfuly updated a task', task: task });
      })
      .catch(console.log);
  },
  delete(request, response) {
    Task.deleteOne({ _id: request.params.id })
      .then(document => {
        response.json({
          message: 'successfully deleted a task',
          task: document,
        });
      })
      .catch(console.log);
  },
};
