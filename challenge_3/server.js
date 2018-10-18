var express = require('express');
var path = require('path');
var morgan = require('morgan');

// connect to mongodb
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'account_info';
 
var app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/purchase', (req, res) => {

  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("mongo connected successfully to server");
   
    const db = client.db(dbName);

    db.collection(dbName).insertOne(req.body)
    .then((response) => {assert.equal(1, response.insertedCount)});
   
    client.close();
  });

  res.status(201).send();
})

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.listen(3000, () => {
  console.log('listening at port 3000');
})

