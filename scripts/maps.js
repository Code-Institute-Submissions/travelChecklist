function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 3.108568,
            lng: 101.621923
        }
    });



    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 3.118301,
        lng: 101.678614
    }, {
        lat: 3.126782,
        lng: 101.616256
    }, {
        lat: 3.072895,
        lng: 101.607598
    }, {
        lat: 3.09966,
        lng: 101.643819
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
