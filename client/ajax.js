import request from 'superagent'

const address = {
	Name: "Joe Blogs",
	Address: "10 Church Street, Wellington"
}

//get request for array of addresses in database
export const getAddresses = (callback) => {
	request
		.get("http://localhost:3000/addresses")
		.end((err, res) => {
			callback(res.body)
			console.log('Getting addresses'))
	}
}

//post request to localhost:3000/addresses
export const postAddress = (address) => {
	request
		.post("http://localhost:3000/addresses")
		.end((err, res) => {
		console.log(res.body)
			// res.body = {}
			console.log('Submitting new address')
	})
}

//event listener for submit button
export const listen = () => {
	$('#submit-button').click(() => {
		console.log('clicked')
		postAddress()
	})
}
