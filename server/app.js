const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');

const app = express();
var cookieParser = require('cookie-parser')


dotenv.config({path:'./config.env' });
 require('./db/conn');

 app.use(cookieParser())

app.use(express.json());

// const User = require('./model/userschema');

app.use(require('./router/auth'));

//mongoose connecting

const PORT = process.env.PORT;



// Middelware


// const middleware = (req,res,next) => 
// {
// console.log(`Hello my Middleware`);

// next();
// }



// app.get('/', (req , res) =>{
//  res.send(`Hello from the  Home app.js`);

// } );

//middle ware is define

// app.get('/about', (req , res) =>{
//     console.log(` Hello my About  `); 
//     res.send(`Hello from the  about from the server`);
   
//    } );




//    app.get('/contact', (req , res) =>{
//     res.send(`Hello from the contact`);
   
//    } );

   
app.get('/signin', (req , res) =>{
    res.send(`Hello from the signin`);
   
   } );
   app.get('/signup', (req , res) =>{
    res.send(`Hello from the signup`);
   
   } );


app.listen(PORT, () =>
{
    console.log(`server is running at port ${PORT}`);

})


module.exports = app;





// {
//     "name" :"Sameer",
//     "email" : "sameer0018@gmail.com",
//     "phone" : 8770864756,
//     "work" : "webdev",
//     "password" : "thapa",
//     "cpassword" : "thapa"
//     }
