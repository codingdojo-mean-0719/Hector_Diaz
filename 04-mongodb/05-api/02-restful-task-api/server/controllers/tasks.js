const Task = require('mongoose').model('Task');

module.exports = ({
  index(response){
    Task.find({})
    .then(tasks=>{
      response.json({message:'success',tasks:tasks})
    })
    .catch(console.log)
  },
  show(request,response){
    Task.findOne({_id:request.params.id})
    .then(task=>response.json({message:'success',task:task}))
    .catch(console.log)
  },
  create(request,response){
    if(request.body.completed === "false"){
      request.body.completed = false;
    }else{
      request.body.completed = true;
    }
    new Task({title:request.body.title,description:request.body.description,completed:request.body.completed})
    .save()
    .then(task=>{
      response.json({message:'successfuly add a new task', task:task})
    })
    .catch(console.log)
  },
  update(request,response){
    if(request.body.completed === "false"){
      request.body.completed = false;
    }else{
      request.body.completed = true;
    }
    Task.updateOne({_id:request.params.id},{title:request.body.title,description:request.body.description,completed:request.body.completed})
    .then(task=>{
      response.json({message:'successfuly updated a task', task:task})
    })
    .catch(console.log)
  },
  delete(request,response){
    Task.deleteOne({_id:request.params.id})
    .then(document=>{
      response.json({message:'successfully deleted a task',task:document})
    })
    .catch(console.log)
  }
})
