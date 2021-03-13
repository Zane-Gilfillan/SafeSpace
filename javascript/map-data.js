function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 41.8888675, lng: -87.6243635 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
};

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//so the goal is now to change the lat and lng from numbers into variables. so we can pass them around our app as we please. i added some ideas to our project board to check out
const locations = [
    { lat: 41.8888675, lng: -87.6243635 },
    { lat: 41.8526105, lng: -87.6228241 },
    { lat: 41.790101, lng: -87.601238 },
    { lat: 41.7914, lng: -87.5981 },
    { lat: 41.977332, lng: -87.660063 },
];




  