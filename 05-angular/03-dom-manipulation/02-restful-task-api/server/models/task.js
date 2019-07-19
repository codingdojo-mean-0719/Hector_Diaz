const {Schema} = require('mongoose');

module.exports = function(){
  const TaskSchema = Schema({
    title:{
      type:String,
      require: true
    },
    description: {
      type: String
    },
    completed:false
  },{timeStamp:true})
  return TaskSchema
}
