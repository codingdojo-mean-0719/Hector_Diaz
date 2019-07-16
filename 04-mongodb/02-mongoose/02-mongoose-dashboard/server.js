const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/muntjacDB',{ useNewUrlParser: true },()=>console.log('conncected to data base'))

const MuntjacSchema = new mongoose.Schema({
  name:String,
  tuskSize:String
})

const Muntjac = mongoose.model('Muntjac', MuntjacSchema);


const express = require('express');
const parser = require('body-parser');
const path = require('path');

app = express();

app.listen(5001,()=>console.log("listening on port 5001"));

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'static')));
app.use(parser.urlencoded({extended:true}));


app.get('/', (request,response)=>response.redirect('/muntjacs'));
app.get('/muntjacs', (request,response)=>{
  Muntjac.find({},(err,muntjacs)=>{
    if(err){
      throw err
    }else{
      response.render('index',{ muntjacs:muntjacs})
    }
  })


});

app.get('/muntjacs/:id', (request,response)=>{
  console.log('this is the id sent through the url',request.params.id)
  Muntjac.find({_id:request.params.id},(err,muntjac)=>{
    if(err){
      throw err
    }else{
      console.log('here is a muntjac',muntjac)
      response.render('animalCard',{muntjac:muntjac[0]})
    }
  })
});

app.get('/muntjacs/new', (request,response)=>response.render('createAnimal'));
app.post('/muntjacs/new/process', (request,response)=>{
  console.log('here is the request',request.body)
  new Muntjac({name:request.body.name,tuskSize: request.body.tuskSize}).save((err)=>{
    if(err){
      throw err
    }else{
      console.log('Muntjac successfully enterd')
    }
  })
  response.redirect('/')
});

app.get('/muntjacs/edit/:id',(request,response)=>{
  Muntjac.find({_id:request.params.id},(err,muntjac)=>{
    if(err){
      throw err
    }else{
      response.render('editAnimal',{muntjac:muntjac[0]})
    }
  })
});
app.post('/muntjacs/edit/process',(request,response)=>{
  Muntjac.findOneAndUpdate({_id:request.body.id},request.body)
  .then(document=>{
    response.redirect('/muntjacs/'+document._id)
    console.log('this is the document',document)
  })
  .catch(console.log)
});

app.get('/muntjacs/destroy/:id',(request,response)=>{
  Muntjac.deleteOne({_id:request.params.id})
  .then(()=>{
    console.log('successfully deleted MUNTJAC')
  })
  .catch(console.log)
  response.redirect('/muntjacs')
})
