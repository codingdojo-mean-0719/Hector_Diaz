class User {
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}

class Message{
    constructor(content,sender){
        this.content = content;
        this.sender = sender;
        this.stamp = new Date();
    }
}

  function findUserById(findId){
    for(const [id,user] of Object.entries(users)){
        if(id === findId){
            return user
        }
    }
    return null
}

function availableName(name){
    for(const [id,user] of Object.entries(users)){
        if(name.toLowerCase() === user.name.toLowerCase()){
            return false
        }
    }
    return true;
}
const express = require('express');
const session = require('express-session');
const path = require('path');
const parser = require('body-parser');


const app = express();

const server = app.listen('5001', ()=>console.log("listening on port 5001"));

const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log('socket connected', socket.id);
    
    socket.emit('populatePage',{'users':users,'messages':messages})
    // console.log('here are the users', users)
    socket.on('newUser',newUser=>{
        if(availableName(newUser.name)){
            users[socket.id] = new User(newUser.name, socket.id)
            socket.broadcast.emit('newMember',users[socket.id])
            socket.emit('activateChat',users[socket.id])
        }else{
            socket.emit('nameTaken')
        }
    })
    socket.on('newMessage',(data)=>{
        messages.push(new Message(data.newMessage,data.userId))
        console.log(messages)
        socket.emit('postMyMessage',messages[messages.length-1]);
        socket.broadcast.emit('postMessage', messages[messages.length-1])
    })
    
})

const users = {};
const messages = [];

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"static")));
app.use(parser.urlencoded({extended:true}));
app.use(session({
    secret:"do good. be good.",
    resave:false,
    saveUninitialized: true,
    cookie: {maxAge:60000}
}))

app.get('/',(request,resposne)=>resposne.render('index'))
app.get('/signin',(request,resposne)=>resposne.render('signin'))





