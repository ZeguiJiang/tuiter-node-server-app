// console.log('Hello World!');
// const express = require('express');
import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors';
import session from "express-session";
import AuthController from "./users/auth-controller.js";



const app = express();
app.use( 
    cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
 );
// configure cors right after instantiating express
app.use(express.json());
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );
   

TuitsController(app);
HelloController(app)
UserController(app)
AuthController(app);
const port = process.env.PORT || 4000;

// app.get('/hello', (req, res) => {
//       res.send('Hello World! How are you???afkjhsdjjfkd??');

// });




// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

// app.get('/hello/:name', (req, res) => {
//     res.send(`hello ${req.params.name} is about page!`)})

// app.get('/users/:username', (req, res) => {
//     res.send(
//         {
//             username: req.params.username,
//             password: '123456'
//         }

//     )

// })


 
app.listen(process.env.PORT || 4000);
// app.listen(4000)
