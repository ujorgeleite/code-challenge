var express = require('express');
var app = express();
const bodyParser = require('body-parser');
global.__base = __dirname + '/';
const config = require(global.__base + 'server/helpers/configuration')();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Authorization, Content-Type");
next();
});



app.use(bodyParser.json());       
app.use(bodyParser.urlencoded({ 
extended: true
}));

require(global.__base + 'server/routes/thermostat-routes')(app);



app.use(express.static('.'));
app.use(express.static('/client/compiled'));

app.listen(config.port, function () {
  console.log(`Running app on port ${config.port}!`);
});

