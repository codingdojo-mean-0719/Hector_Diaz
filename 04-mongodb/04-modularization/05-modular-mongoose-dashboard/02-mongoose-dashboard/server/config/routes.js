const animals = require('../controllers/animals')

module.exports = function(app){

  app.get('/', (request,response)=>response.redirect('/muntjacs'));

  app.get('/muntjacs', (request,response)=>{
    animals.renderAndPopulateIndex(response)
  });

  app.get('/muntjacs/:id', (request,response)=>{
    animals.renderCard(request,response);
  });

  app.get('/muntjacs/new', (request,response)=>response.render('createAnimal'));

  app.post('/muntjacs/new/process', (request,response)=>{
    animals.addNewAnimal(request,response)
  });

  app.get('/muntjacs/edit/:id',(request,response)=>{
    animals.retriveAnimal(request,response)
  });
  app.post('/muntjacs/edit/process',(request,response)=>{
    animals.updateAnimal(request,response)
  });

  app.get('/muntjacs/destroy/:id',(request,response)=>{
    animals.deleteAnimal(request,response)
  })

}
