let map, infoWindow;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: 41.8888675, lng: -87.6243635 },
    });
    
    infoWindow = new google.maps.InfoWindow();
    const mapHolder = document.querySelector('map-container')
    const locationButton = document.createElement("button");
    locationButton.textContent = "Find My Location";
    locationButton.classList.add("custom-map-control-button");
    locationButton.style.height = "3rem"
    locationButton.style.width = "5rem"
    locationButton.style.top = "1rem"
    locationButton.style.left = "2rem"
    locationButton.style.fontSize = ".8rem"
    locationButton.style.backgroundColor = "#FFC300"
    locationButton.style.borderRadius = "5rem"
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }});
    
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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//so the goal is now to change the lat and lng from numbers into variables. so we can pass them around our app as we please. i added some ideas to our project board to check out
const locations = [
    { lat: 41.8888675, lng: -87.6243635 },
    { lat: 41.8526105, lng: -87.6228241 },
    { lat: 41.790101, lng: -87.601238 },
    { lat: 41.7914, lng: -87.5981 },
    { lat: 41.977332, lng: -87.660063 },
    //there are some repeated latitudes and longitudes due to multiple bathrooms at the same address. 
    // Should possibly  add the 'comment' field as it contains useful information to the end user 
    // some locations included the keyword "chicago" and were not actually in the city itself 
    { lat: 41.88027, lng: -87.62445},
    { lat: 41.8809849, lng: -87.6258366},
    { lat: 41.98048, lng: -87.885643},
    { lat: 41.8711357, lng: -87.6716935},
    { lat: 42.0015036, lng: -87.660755},
    { lat: 41.9981578, lng: -87.6570519},
    { lat: 41.9983265, lng: -87.6572681},
    { lat: 41.9983265, lng: -87.6572681},
    { lat: 41.8977465, lng: -87.6270445},
    { lat: 41.7860645, lng: -87.5913825},
    { lat: 41.7956199, lng: -87.5988913},
    { lat: 41.8737874, lng: -87.6246995},
    { lat: 41.8737874, lng: -87.6246995},
    { lat: 41.8737874, lng: -87.6246995},
    { lat: 41.7661381, lng: -87.568141},
    { lat: 41.9779606, lng: -87.6602131},
    { lat: 41.892353, lng: -87.6273233},
    { lat: 41.9097355, lng: -87.6768698},
    { lat: 41.9183203, lng: -87.653169},
    { lat: 41.882564, lng: -87.6374246},
    { lat: 41.7879593, lng: -87.5995794},
    { lat: 41.881662, lng: -87.6249685},
    { lat: 41.881662, lng: -87.6249685},
    { lat: 41.9296617, lng: -87.7071497},
    { lat: 41.8809923, lng: -87.6256487},
    { lat: 41.8881532, lng: -87.6337102},
    { lat: 41.8718079, lng: -87.6709492},
    { lat: 41.8921448, lng: -87.6074731},
    { lat: 41.8916405, lng: -87.6061554},
    { lat: 41.8918613, lng: -87.6096153},
    { lat: 41.8038062, lng: -87.5818865},
    { lat: 41.8038062, lng: -87.5818865},
    { lat: 41.9118171, lng: -87.6316716},
    { lat: 41.9767901, lng: -87.9008276},
    { lat: 41.9801774, lng: -87.8863359},
    { lat: 41.8795473, lng: -87.6237238},
    { lat: 41.8934776, lng: -87.6261792},
    { lat: 41.8955134, lng: -87.6901831},
    { lat: 41.8821231, lng: -87.6254547},
    { lat: 41.8964025, lng: -87.6641516},
    { lat: 41.8963023, lng: -87.6679454},
    { lat: 41.9299792, lng: -87.6438133},
    { lat: 41.9115838, lng: -87.6350407},
    { lat: 41.8962514, lng: -87.6219521},
    { lat: 41.8971824, lng: -87.621029},
    { lat: 41.895943, lng: -87.6944109},
    { lat: 41.8957142, lng: -87.676773},
    { lat: 44.9445763, lng: -93.2629321},
    { lat: 44.9378997, lng: -93.262332},
    { lat: 42.0498537, lng: -87.677334},
    { lat: 42.0317989, lng: -87.6786523},
    { lat: 42.0317989, lng: -87.6786523},
    { lat: 42.0317989, lng: -87.6786523},
    { lat: 41.994363, lng: -87.657132},
    { lat: 41.976398, lng: -87.668214},
    { lat: 41.921463, lng: -87.664798},
    { lat: 41.955184, lng: -87.65455},
    { lat: 41.983811, lng: -87.656762},
    { lat: 41.7883918, lng: -87.598107},
    { lat: 41.7910098, lng: -87.5964657},
    { lat: 41.9069015, lng: -87.6718357},
    { lat: 41.912881, lng: -87.677341},
    { lat: 41.978284, lng: -87.668518},
    { lat: 42.007867, lng: -87.668074},
    { lat: 41.9615203, lng: -87.6750669},
    { lat: 41.9233288, lng: -87.6978093},
    { lat: 41.9422497, lng: -87.6444881},
    { lat: 41.8821873, lng: -87.6256606},
    { lat: 41.978595, lng: -87.667963},
    { lat: 41.8934776, lng: -87.6261792},
    { lat: 41.9083507, lng: -87.6525453},
    { lat: 42.000149, lng: -87.660402},
    { lat: 41.8985718, lng: -87.6249154},
    { lat: 41.8985718, lng: -87.6249154},
    { lat: 41.8847013, lng: -87.6286851},
    { lat: 41.8923096, lng: -87.6269057},
    { lat: 41.9251161, lng: -87.6526156},
    { lat: 41.8804857, lng: -87.6222864},
    { lat: 41.9925101, lng: -87.6603793},
    { lat: 41.942628, lng: -87.702699},
    { lat: 41.8817574, lng: -87.6318285},
    { lat: 41.9979741, lng: -87.6598257},
    { lat: 41.9886773, lng: -87.660405},
];




  