const express =  require('express');
const session =  require('express-session');
const parser =  require('body-parser');
const ejs = require('ejs');
const path = require('path');


const app = express();

const server = app.listen(8000,()=>{console.log("listening on port 8000")});
const io = require('socket.io')(server);
let counter = 0;

app.get('/', function(request, response) {
    console.log('get counter', counter)
    response.render("index",{counter:counter});
})

io.on('connection',(socket)=>{
    socket.on("epicPress",()=>{
        counter ++;
        io.emit('updatePresses', counter)
    })
    socket.on('resetPost',()=>{
        console.log('reset button')
        counter = 0;
        io.emit('resetGet', counter)
    })
})



app.set(__dirname + "static/style.css");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname + "/static"));
app.use(parser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
