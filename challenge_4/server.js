var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client/dist'));

app.listen(3000, () => {
  console.log('listening at', 3000);
})
