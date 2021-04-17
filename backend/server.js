const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require("mongodb");
const db = require('./config/db')

const app = express();
app.disable("x-powered-by");
const port = 8000;
let corsOptions = {
    origin: 'trustedwebsite.com' // Compliant
  };
  app.use(cors(corsOptions));
  
  // Configuring body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

// Where we will keep books
let books = [{ isbn: '9781593275846',
title: 'Eloquent JavaScript, Second Edition',
author: 'Marijn Haverbeke',
publish_date: '2014-12-14',
publisher: 'No Starch Press',
numOfPages: '472' }];


app.get('/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));