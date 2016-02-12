var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var utils = require('./lib')
var getAddresses = require('./client/ajax.js').getAddresses
var postAddress = require('./client/ajax.js').postAddress
var listen = require('./client/ajax.js').listen
var app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

// Listen for requests
var port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('server running on port ' + port);
});

app.post('/addresses', (req, res) => {
  var address = bodyParser(req.body);
  var fullPath =  path.join(__dirname, '/../data/db.json');
  fs.readFile(fullPath, 'utf8', function(err, data) {
    if (err) {
     console.log("error", fullPath);
    } else {
      addressObj = JSON.parse(data);        // convert to an array
      addressArray = addressObj.users;
      addressArray.push(address);          // push the new name on to it
      fs.writeFileSync(fullPath, JSON.stringify(addressObj), 'utf8')
      res.send('POST request to address')
    }
  })
})
