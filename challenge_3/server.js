var express = require('express');
var path = require('path');
var morgan = require('morgan');

// connect to mongodb
const MongoClient = require('mongodb').MongoClient;


var app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/purchase', (req, res) => {
  res.status(201).send();
})

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.listen(3000, () => {
  console.log('listening at port 3000');
})

