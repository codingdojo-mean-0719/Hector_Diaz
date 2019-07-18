const {connect} = require('mongoose');
const {model} = require('mongoose');

module.exports = function(){
  connect('mongodb://localHost/tasks',{useNewUrlParser:true});

  model('Task',require('./task')())
}
