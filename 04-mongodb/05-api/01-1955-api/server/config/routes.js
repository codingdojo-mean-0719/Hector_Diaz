const nineteen55 = require('../controllers/1955s')

module.exports = function(app){
  app.get('/',(request,response)=>{
    nineteen55.retrieveAll1955ers(response);
  });
  app.get('/new/:name/',(request,response)=>{
    nineteen55.create1955er(request,response);
  });
  app.get('/remove/:name/',(request,response)=>{
    nineteen55.delete1955er(request,response);
  });
  app.get('/:name',(request,response)=>{
    nineteen55.retrieveA1955er(request,response);
  });
}
