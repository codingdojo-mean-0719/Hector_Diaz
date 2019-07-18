const mongoose = require('mongoose');

const Nineteen55 = mongoose.model('1955');

module.exports = {
  retrieveAll1955ers:function(response){
    Nineteen55
    .find({})
    .then(document=>response.json({message:'success',data:document}))
    .catch(console.log);
    },
  retrieveA1955er:function(request,response){
    Nineteen55
    .find({name:request.params.name})
    .then(document=>response.json({message:'success',data:document}))
    .catch(console.log);
  },
  create1955er:function(request,response){
    new Nineteen55({name:request.params.name})
    .save()
    .then(document=>response.json({message:'success',data:document}))
    .catch(console.log);
  },
  delete1955er:function(request,response){
    Nineteen55
    .deleteOne({name:request.params.name})
    .then(document=>response.json({message:'success',data:document}))
    .catch(console.log);
    }
}
