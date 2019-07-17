
const quotes = require('../controllers/quotes.js')

module.exports = function(app){
app.get('/',(request,response)=>{
  quotes.index(request,response)
})
}
