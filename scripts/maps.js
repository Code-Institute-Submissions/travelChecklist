function initMap() {
            var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 12,
    center: {
      lat: 3.108568,
      lng: 101.621923
    }
  });
 
function initialize() {
	var homeLatlng = new google.maps.LatLng(3.108568,101.621923);

	var myOptions = {
		zoom: 12,
		center: homeLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map"));

	var infowindow =  new google.maps.InfoWindow({
		content: 'Hello World!',
		map: map,
		position: homeLatlng
	});

}

google.maps.event.addDomListener(window, 'load', initialize());

var infowindow =  new google.maps.InfoWindow({
	content: 'Hello World!',
	map: map
});

var marker = new google.maps.Marker({
	position: homeLatlng, 
	map: map
});

infowindow.open(map, marker);

google.maps.event.addListener(marker, 'mouseover', function() {
	infowindow.open(map, this);
});

google.maps.event.addListener(marker, 'mouseout', function() {
	infowindow.close();
});

function initialize() {
	var i;
	var arrDestinations = [
		{
			lat: 3.118301, 
			lon: 101.678614, 
			title: "My Money Master Sdn. Bhd", 
		},
		{
			lat: 3.126782, 
			lon: 101.616256, 
			title: "Al-Tamij Money Changer - Atria Shopping Gallery", 
		},
		{
			lat: 3.072895, 
			lon: 101.607598, 
			title: "Spectrum Forex Money Changer Sunway Pyramid", 
		},
		{
			lat: 3.099667, 
			lon: 101.643819, 
			title: "KL Remit Exchange Sdn Bhd", 
		}
	];
	
	var myOptions = {
		zoom: 12,
		center: new google.maps.LatLng(3.108568,101.621923),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	
	var infowindow =  new google.maps.InfoWindow({
		content: ''
	});
	
	// loop over our array
/**	for (i = 0; i < arrDestinations.length; i++) {
		// create a marker
		var marker = new google.maps.Marker({
			title: arrDestinations[i].title,
			position: new google.maps.LatLng(arrDestinations[i].lat, arrDestinations[i].lon),
			map: map
		});
		
		// add an event listener for this marker
		bindInfoWindow(marker, map, infowindow, "<p>" + arrDestinations[i].description + "</p>");  
	}
}

function bindInfoWindow(marker, map, infowindow, html) { 
	google.maps.event.addListener(marker, 'click', function() { 
		infowindow.setContent(html); 
		infowindow.open(map, marker); 
	}); 
} 

google.maps.event.addDomListener(window, 'load', initialize);