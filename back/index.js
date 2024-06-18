import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';
import { Book } from "./models/bookModel.js";
import booksRoute from "./riutes/booksRoute.js";
const app = express();

app.use(express.json());

//app.use(cors({
//  origin: 'http://localhost:5555',
//  methods: ['GET', 'POST','PUT','DELETE'],
//  allowedHeaders: ['Content-Type'],
//}));

app.get('/', (req, res) => {
    return res.status(234).send('Welcome guys');
});

app.use('/books',booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });