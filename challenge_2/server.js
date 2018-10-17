var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var csvGenerator = require('./csvGenerator.js');
var app = express();
var _ = require('underscore');


app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   next();
// })

// app.post('/file', (req, res) => {
  
// res.end()
// })

app.post('/csv', (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  var csv = csvGenerator.csvGenerator(req.body);

  var compiled = _.template(`
    <form action="/csv" method="post" id="something">
      <textarea name="sales_report" rows="25" cols="75"><%= report %></textarea>
      <br>
      <input type="submit" />
    </form>`);

  res.status(201).send(compiled({report: csv}));
})

app.listen(3000, () => {
  console.log('listening on ', 3000)
});



