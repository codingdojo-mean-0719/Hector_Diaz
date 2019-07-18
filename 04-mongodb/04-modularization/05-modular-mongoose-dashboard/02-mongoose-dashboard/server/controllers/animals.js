const mongoose = require('mongoose');

const Muntjac = mongoose.model('Muntjac')

module.exports = {
  renderCard:function(request,response){
    Muntjac.find({_id:request.params.id})
    .then(muntjac=>{
      response.render('../client/views/animalCard',{muntjac:muntjac[0]})
    })
    .catch(console.log)
  },
  renderAndPopulateIndex:function(response){
    Muntjac.find({},(err,muntjacs)=>{
      if(err){
        throw err
      }else{
        response.render('../client/views/index',{ muntjacs:muntjacs})
      }
    })
  },
  createAnimal:function(request,response){
    new Muntjac({name:request.body.name,tuskSize: request.body.tuskSize})
    .save()
    .then(
      response.redirect('/')
    )
    .catch(console.log)
  },
  retriveAnimal:function(request,response){
    Muntjac.find({_id:request.params.id})
    .then((muntjac)=>{
      response.render('../client/views/editAnimal',{muntjac:muntjac[0]})
    })
    .catch(console.log)
  },
  updateAnimal:function(request,response){
    Muntjac.findOneAndUpdate({_id:request.body.id},request.body)
    .then(document=>{
      response.redirect('/muntjacs/'+document._id)
      console.log('this is the document',document)
    })
    .catch(console.log)
  },
  deleteAnimal:function(request,response){
    Muntjac.deleteOne({_id:request.params.id})
    .then(response.redirect('/muntjacs'))
    .catch(console.log)
  }

}
