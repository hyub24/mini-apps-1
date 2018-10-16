var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client'));

app.post('/csv', (req, res) => {
  console.log(typeof req.body)
  console.log(req.body);
  res.end()
})

app.listen(3000, () => {
  console.log('listening on ', 3000)
});



