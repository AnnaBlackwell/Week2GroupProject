var request = require ('superagent')
var jquery = require('jquery')

var address = {
	Name: "Joe Blogs",
	Address: "10 Church Street, Wellington"
}

//get request for array of addresses in database
export var getAddresses = function (callback) {
	request
		.get("http://localhost:3000/addresses")
		.end(function(err, res) {
			callback(res.body)
			console.log('Getting addresses'))
	}
}

//post request to localhost:3000/addresses
export var postAddress = function(address) {
	request
		.post("http://localhost:3000/addresses")
		.end(function(err, res) {
		console.log(res.body)
		// res.body = {}
		console.log('Submitting new address')
	})
}

//event listener for submit button
export var listen = function() {
	$('#submit-button').click(function() {
		console.log('click')
		postAddress()
	})
}

modules.export = {getAddresses, postAddress, listen}