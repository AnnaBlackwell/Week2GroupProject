var express = require('express')
var fs = require('fs')
var app = express()
var path = require('path')
var utils = require('./lib')

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests

var port = process.env.PORT || 3000

app.listen(port, function() {

  console.log('server running on port ' + port);
});
