var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var csvGenerator = require('./csvGenerator.js');
var app = express();
var _ = require('underscore');

app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/csv', (req, res) => {
  // console.log(req.body);
  // console.log(typeof req.body);
  var csv = csvGenerator.csvGenerator(JSON.parse(req.body.sales_report));

  var compiled = _.template(`<head>
  <title>CSV Report Generator</title>
</head>
<body>
  <h1>CSV Report Generator</h1>
  <div>
    <form action="/csv" method="post" id="something">
      <textarea name="sales_report" rows="25" cols="75"><%= report %></textarea>
      <br>
      <input type="submit" />
    </form>
  </div>
</body>`);

  res.status(201).send(compiled({report: csv}));
})

app.listen(3000, () => {
  console.log('listening on ', 3000)
});



