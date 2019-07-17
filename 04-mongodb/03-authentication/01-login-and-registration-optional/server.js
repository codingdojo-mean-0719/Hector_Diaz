const mongoose = require('mongoose');

mongoose.set('userCreateIndex',true)
mongoose.connect('mongodb://localHost/logRege',{ useNewUrlParser: true },()=>console.log('connected to database'))
// var validateEmail = function(email) {
//   let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email)
// };

const UserSchema = new mongoose.Schema({
  fName:{
    type:String,
    required:[true, "you must enter a first name"],
    minlenght: 2
  },
  lName:{
    type:String,
    required:[true, "you must enter a first name"],
    minlenght: 2
  },
  bDay:{
    type: Date,
    required: true,
    // min: ['2004-01-01','you must be 13 and older to use this site']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    // validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
  password:{
    type:String,
    required: true
  }
})

const User = mongoose.model('User',UserSchema);


const express = require('express');
const parser = require('body-parser');
const path = require('path');
const session = require('express-session')
const flash = require('express-flash')
const bcrypt = require('bcrypt')

app = express();

app.set('view engine','ejs');
app.use(flash());
app.use(express.static(path.join(__dirname,'static')));
app.use(parser.urlencoded({extended:true}));
app.use(session({
  secret: 'do good, be good',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:60000}
}))

app.get('/',(request,response)=>response.redirect('/register'))
app.get('/register',(request, response)=>response.render('index',{expressFlash:request.flash('errors')}));
app.post('/register/process',(request,response)=>{
  // if(request.body.fName.trim().length<2){
  //   request.flash('Names must be at least two characters long')
  // }
  // if(request.body.lName.trim().length<2){
  //   request.flash('Names must be at least two characters long')
  // }
  // if(request.body.email.trim().length<4){
  //   request.flash('Names must be at least two characters long')
  // }else if(request.body.email)

  if(request.body.vPassword != request.body.password){
    request.flash('password virification did not match');
    response.redirect('/register')
  }
  bcrypt.hash(request.body.password,10)
  .then((hash)=>{
    new User({fName:request.body.firstName,lName:request.body.lastName,bDay:request.body.birthday,email:request.body.email,password:hash})
    .save()
    .then((document)=>{
      request.session.userId = document._id;
      response.redirect('/login')
    })
    .catch((errors)=>{
      request.flash('errors',errors)
      response.redirect('/register')
    })
  })
  .catch((errors)=>{
    request.flash('here are the errors',errors)
  })
})


app.get('/login',(request,response)=>response.render('login'))
app.post('/login/process',(request,response)=>{

  User.findOne({email:request.body.email})
  .then(user=>{
    bcrypt.compare(request.body.password,user.password)
    .then(()=>{
      request.session.userId = user._id
      response.redirect('/success')
    })
    .catch((error)=>{
      console.log(error)
      response.redirect('/login')
    })
  })
  .catch(console.log)
  })
app.get('/success',(request,response)=>{
  if(request.session.userId){
    response.render('success')
  }else{
    request.flash('unsuccessful login attempt')
    response.redirect('/login')
  }
})

app.get('/logout',(request,respone)=>{
  request.session.userId = null;
  respone.redirect('/register')
})

app.listen(5001,()=>console.log('listening on port 5001'))
