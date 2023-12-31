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
    // origin: "http://localhost:3000",
    origin: ["http://localhost:3000", "https://poetic-gingersnap-cddcff.netlify.app", "https://lighthearted-starlight-ee934e.netlify.app", "https://tranquil-stardust-372f0b.netlify.app"]
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
HelloController(app);
UserController(app);
AuthController(app);


app.listen(process.env.PORT || 4000);
// app.listen(4000)
