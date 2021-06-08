require ('dotenv').config()
 const express = require ('express')
 const app= express()
 const PORT=process.env.PORT||3300
  const ejs =require('ejs')
  const path=require('path')
  const expresslayout = require('express-ejs-layouts')
//  const session = require ('express-session')
// const flash = require('express-flash')
  const mongoose = require('mongoose')
 
  // const MongoDbStore = require('connect-mongo')
  //  (session);

  //  let mongoStore = new MongoDbStore ({
  //   mongooseConnection:db,
  //      collection:'sessions'
  //     })
  
  

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we are connected bro")
});
mongoose.connect('mongodb://localhost/urbanvirsa', {useNewUrlParser: true, useUnifiedTopology: true}); 

  // app.use(session({
  //   secret : 'mysecret',
  //   resave: false,
  //   store: mongoStore,
  //   saveUninitialized: false ,
  //   cookie : { maxAge:1000*60*60*24}
  // }))

 //app.use(flash())   
  
 //app.use(express.static('public'))
 app.use(express.urlencoded({extended : false}))





 app.get(expresslayout)
 app.get(ejs)
 app.set('views', path.join(__dirname,'/resources/views'))
 app.set('view engine','ejs') 
 require('./routes/web')(app)

 app.listen(3300, () =>{
  console.log(`listening on port ${PORT} `)

}) 

