var express = require('express')
var fs = require('fs')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

module.exports = app
