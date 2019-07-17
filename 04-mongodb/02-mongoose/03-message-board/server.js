const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/muntjacDB',{ useNewUrlParser: true },()=>console.log('conncected to data base'))

const commentSchema = new mongoose.Schema({
  sender: String,
  comment: String
})
const MessageSchema = new mongoose.Schema({
  sender: String,
  message: String,
  comment: [commentSchema]
})

const Message = mongoose.model('Message',MessageSchema)
const Comment = mongoose.model('Comment',commentSchema)

const express = require('express');
const path = require('path');
const parser = require('body-parser');

app = express();

const server = app.listen(5001,()=>console.log('listening on port 5001'));

const io = require('socket.io')(server);

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"static")));
app.use(parser.urlencoded({extended:true}));

io.on('connection', (socket)=>{
  socket.on('newMessage',data=>{
    new Message({sender:data.name,message:data.message})
    .save()
    .then((message)=>{
        socket.emit('postMessage', {postMessage:message})
    })
    .catch(console.log)
  })
  socket.on('newComment',newComment=>{
    console.log('incoming coment')
    new Comment({sender:newComment.name,comment:newComment.comment}).save()
    .then(comment=>{
      Message.findOne(newComment.id)
      .then((message)=>{
        message.comment.push(comment)
        message.save()
        .then(()=>{
          console.log('successfully added comment')
        })
        .catch(console.log)
      })
      .catch(console.log)
    })
    .catch(console.log)
  })
})

app.get('/', (request,response)=>response.redirect('/messageboard'))
app.get('/messageboard',(request,response)=>{
  Message.find({})
  .then(document=>{
    console.log('here are the messages',document)
    response.render('index',{messages:document})
  })
  .catch(console.log)
})
