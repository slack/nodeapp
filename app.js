var express = require("express");
var app = express();

module.exports = app

// Routes

app.get('/', function(req, res){
  var body = 'Hello World: ' + process.env.NODE_ENV;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

// Bind to port

app.listen(process.env.PORT || 3000);
console.log('Listening');
