var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Under construction!');
});

app.listen(3000, function () {
  console.log('Running app on port 3000!');
});

