const quote = require('./quotes.js')


module.exports = function(io){
  io.on('connection',(socket)=>{
    console.log('socket connection id',socket.id);
    socket.on("newQoute",(data)=>{
        quote.addNewQuote(data,socket)
    })
  })
}
