module.exports = function() {

	// api call
	var map
	function initMap() {

		map = new google.maps.Map(document.getElementById('map'), {
			center: {late: -34.397, lng: 150.644},
			zoom: 8

		})

	}

}
