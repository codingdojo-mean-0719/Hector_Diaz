const moongoose = require('mongoose')

const Quote = moongoose.model('Qoote')


module.exports = {
  index:function(request,response){
    response.render('index')
  },
postNewQuote:function(doc,socket){
  socket.broadcast.emit("postQoute", doc)
          Quote.find({},(err,qoutes)=>{
            if(err){
              throw err
            }else{
              socket.emit('postQuotes', qoutes)
            }
          })
},
  addNewQuote:function(data,socket){
      new Quote({qoute:data.quote,author:data.name}).save((err,doc)=>{
        if(err){
          console.log('something went wrong');
        }else{
          this.postNewQuote(doc, socket);
        }
      })
  }
}
