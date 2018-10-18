var express = require('express');
var path = require('path');
var morgan = require('morgan');


var app = express();

app.use(morgan('dev'));
app.use(express.json());

app.post('/formone', (req, res) => {
  console.log(req.body)
  console.log(typeof req.body)
  res.send();
})

app.post('/formtwo', (req, res) => {
  res.send();
})

app.post('/formthree', (req, res) => {
  res.send();
})

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.listen(3000, () => {
  console.log('listening at port 3000');
})

