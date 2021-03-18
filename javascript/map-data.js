let map, infoWindow;

function initMap() {
  const customLatLng = { lat: 41.8888675, lng: -87.6243635 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: customLatLng,
    });
    
    const marker = new google.maps.Marker({
      position: customLatLng,
      map,
      title: "Click to Zoom"
    });

    infoWindow = new google.maps.InfoWindow({
      content: `<div id="content">
      Hello
      </div>`
    });
    const findButton = document.getElementById('find-btn')
    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    locationButton.textContent = "Find My Location";
    locationButton.style.display = "none"
    // locationButton.classList.add("custom-map-control-button");
    // locationButton.style.height = "3rem"
    // locationButton.style.width = "5rem"
    // locationButton.style.top = "1rem"
    // locationButton.style.left = "2rem"
    // locationButton.style.fontSize = ".8rem"
    // locationButton.style.backgroundColor = "#FFC300"
    // locationButton.style.borderRadius = "5rem"
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);


    findButton.addEventListener("click", (e) => {
    // Try HTML5 geolocation.
    console.log(e.target)
    map.setCenter(marker.getPosition())
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
      //add event listener for each marker to get info about
      //the individual markers here
      let newWindow = new google.maps.InfoWindow({
        content: "<h1>Name:</h1>" + location.name + "<h1>Address</h1>" + location.streetName + "<a href='#' onclick='save(" + i + ")'>Save</a>",
      })
      let newMark = new google.maps.Marker({
        position: location,
        map,
        title: "String for now",
        label: labels[i % labels.length],
      });
      newMark.addListener("click", () => {
        // console.log(this)
        map.setZoom(16)
        map.setCenter(newMark.getPosition())
        newWindow.open(map, newMark)
      })
      return newMark
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

function save (i) {
  console.log (i)
  window.localStorage.setItem(i,true);
  window.localStorage.getItem(i)
// => return "true" if was saved or "null" if not
}
 

const locations = 
[
  {
    "lat": 41.8888675,
    "lng": -87.6243635,
    "name": "McCormick bridgehouse and Chicago River museum",
    "streetName": "Michigan Avenue bridge/99 Chicago Riverwalk "
  },
  {
    "lat": 41.8526105,
    "lng": -87.6228241,
    "name": "Hampton Inn Chicago McCormick Place",
    "streetName": "123 E Cermak Rd Suite 100, Chicago, IL 60616"
  },
  {
    "lat": 41.790101,
    "lng": -87.601238,
    "name": "Cobb Hall - University of Chicago",
    "streetName": "5811 S Ellis Avenue"
  },
  {
    "lat": 41.7914,
    "lng": -87.5981,
    "name": "University of Chicago, Regenstein Library",
    "streetName": "57th Street and University Avenue"
  },
  {
    "lat": 41.977332,
    "lng": -87.660063,
    "name": "Coffee Chicago",
    "streetName": "5256 N. Broadway"
  },
  {
    "lat": 41.88027,
    "lng": -87.62445,
    "name": "The School of the Art Institute of Chicago",
    "streetName": "112 S Michigan Ave"
  },
  {
    "lat": 41.8809849,
    "lng": -87.6258366,
    "name": "School of the Art Institute of Chicago",
    "streetName": "37 S. Wabash"
  },
  {
    "lat": 41.98048,
    "lng": -87.885643,
    "name": "Chicago OHare International Airport",
    "streetName": "10000 Bessie Coleman Drive"
  },
  {
    "lat": 41.8711357,
    "lng": -87.6716935,
    "name": "Project WISH at the University of Illinois at Chicago",
    "streetName": "840 South Wood Street Room B39 (basement)"
  },
  {
    "lat": 42.0015036,
    "lng": -87.660755,
    "name": "Loyola University Chicago",
    "streetName": "6511 N. Sheridan Road"
  },
  {
    "lat": 41.9981578,
    "lng": -87.6570519,
    "name": "Loyola University Chicago",
    "streetName": "6430 N. Kenmore"
  },
  {
    "lat": 41.9983265,
    "lng": -87.6572681,
    "name": "Loyola University Chicago",
    "streetName": "1020 W. Sheridan"
  },
  {
    "lat": 41.9983265,
    "lng": -87.6572681,
    "name": "Loyola University Chicago",
    "streetName": "1020 W. Sheridan"
  },
  {
    "lat": 41.8977465,
    "lng": -87.6270445,
    "name": "Loyola University Chicago",
    "streetName": "26 E. Pearson St."
  },
  {
    "lat": 41.7860645,
    "lng": -87.5913825,
    "name": "Chicago Theological Seminary",
    "streetName": "1407 E. 60th St. "
  },
  {
    "lat": 41.7956199,
    "lng": -87.5988913,
    "name": "The Lutheran School of Theology at Chicago",
    "streetName": "1100 East 55th Street "
  },
  {
    "lat": 41.8737874,
    "lng": -87.6246995,
    "name": "Columbia College Chicago",
    "streetName": "618 South Michigan Avenue"
  },
  {
    "lat": 41.8737874,
    "lng": -87.6246995,
    "name": "Columbia College Chicago",
    "streetName": "618 South Michigan Avenue"
  },
  {
    "lat": 41.8737874,
    "lng": -87.6246995,
    "name": "Columbia College Chicago",
    "streetName": "618 S Michigan "
  },
  {
    "lat": 41.7661381,
    "lng": -87.568141,
    "name": "Chicago Women's Project",
    "streetName": "2317 E 71st "
  },
  {
    "lat": 41.9779606,
    "lng": -87.6602131,
    "name": "Chicago grind coffeehouse ",
    "streetName": "5256 n broadway "
  },
  {
    "lat": 41.892353,
    "lng": -87.6273233,
    "name": "Freehand Chicago Hotel/Hostel",
    "streetName": "19 E Ohio St "
  },
  {
    "lat": 41.9097355,
    "lng": -87.6768698,
    "name": "Bru Chicago",
    "streetName": "1562 N Milwaukee"
  },
  {
    "lat": 41.9183203,
    "lng": -87.653169,
    "name": "952-954 W Armitage Ave, Chicago, IL 60614, USA",
    "streetName": "952-954 W Armitage Ave"
  },
  {
    "lat": 41.882564,
    "lng": -87.6374246,
    "name": "Lyric Opera of Chicago",
    "streetName": "20 N Wacker Dr"
  },
  {
    "lat": 41.7879593,
    "lng": -87.5995794,
    "name": "University of Chicago",
    "streetName": "1116 E 59th St, "
  },
  {
    "lat": 41.881662,
    "lng": -87.6249685,
    "name": "Chicago Athletic Association",
    "streetName": "12 S Michigan Ave"
  },
  {
    "lat": 41.881662,
    "lng": -87.6249685,
    "name": "Chicago Athletic Association",
    "streetName": "12 S Michigan Ave"
  },
  {
    "lat": 41.9296617,
    "lng": -87.7071497,
    "name": "G-Mart Comics Chicago",
    "streetName": "2641 N Kedzie Ave"
  },
  {
    "lat": 41.8809923,
    "lng": -87.6256487,
    "name": "School of The Art Institute of Chicago - Sharp Building",
    "streetName": "37 S Wabash"
  },
  {
    "lat": 41.8881532,
    "lng": -87.6337102,
    "name": "The Chicago School of Professional Psychology",
    "streetName": "325 N Wells St"
  },
  {
    "lat": 41.8718079,
    "lng": -87.6709492,
    "name": "Library of the Health Sciences, University of Illinois at Chicago",
    "streetName": "1750 W. Polk St."
  },
  {
    "lat": 41.8921448,
    "lng": -87.6074731,
    "name": "Chicago Shakespeare Theater",
    "streetName": "800 E Grand Ave"
  },
  {
    "lat": 41.8916405,
    "lng": -87.6061554,
    "name": "The Yard at Chicago Shakespeare Theater",
    "streetName": "800 E Grand Ave"
  },
  {
    "lat": 41.8918613,
    "lng": -87.6096153,
    "name": "Chicago Children’s Museum",
    "streetName": "700 E Grand Ave"
  },
  {
    "lat": 41.8038062,
    "lng": -87.5818865,
    "name": "S Lake Shore Dr, Chicago, IL 60637, USA",
    "streetName": "S Lake Shore Dr"
  },
  {
    "lat": 41.8038062,
    "lng": -87.5818865,
    "name": "S Lake Shore Dr, Chicago, IL 60637, USA",
    "streetName": "S Lake Shore Dr"
  },
  {
    "lat": 41.9118171,
    "lng": -87.6316716,
    "name": "Chicago History Museum",
    "streetName": "1601 N Clark St"
  },
  {
    "lat": 41.9767901,
    "lng": -87.9008276,
    "name": "Terminal 3, Chicago, IL 60666, USA",
    "streetName": "Terminal 3"
  },
  {
    "lat": 41.9801774,
    "lng": -87.8863359,
    "name": "Chicago O’Hare Internartional Airport - Terminal 3",
    "streetName": "10000 W O'Hare Ave"
  },
  {
    "lat": 41.8795473,
    "lng": -87.6237238,
    "name": "Chicago Institute of Art",
    "streetName": "111 S Michigan Ave"
  },
  {
    "lat": 37.8462952,
    "lng": -122.252171,
    "name": "Zachary's Chicago Pizza",
    "streetName": "5801 College Ave"
  },
  {
    "lat": 37.8916625,
    "lng": -122.278576,
    "name": "Zachary Chicago Pizza",
    "streetName": "1853 Solano Ave"
  },
  {
    "lat": 42.0935807,
    "lng": -87.8259313,
    "name": "Kohl Children's Museum of Greater Chicago",
    "streetName": "2100 Patriot Boulevard"
  },
  {
    "lat": 37.8462952,
    "lng": -122.252171,
    "name": "Zachary's Chicago pizza",
    "streetName": "5801 College Ave"
  },
  {
    "lat": 41.8934776,
    "lng": -87.6261792,
    "name": "Trader Joe's",
    "streetName": "44 E Ontario St, Chicago, IL 60611"
  },
  {
    "lat": 41.8955134,
    "lng": -87.6901831,
    "name": "Star Lounge Coffee Bar",
    "streetName": "2521 W. Chicago Ave. "
  },
  {
    "lat": 41.8821231,
    "lng": -87.6254547,
    "name": "Ryo Sushi",
    "streetName": "62 E Madison St, Chicago, IL 60602"
  },
  {
    "lat": 41.8964025,
    "lng": -87.6641516,
    "name": "Beauty Bar",
    "streetName": "1444 W. Chicago Ave. "
  },
  {
    "lat": 41.8963023,
    "lng": -87.6679454,
    "name": "The Shapiro Ballroom/I Do Dance Studio",
    "streetName": "1612 W Chicago Ave"
  },
  {
    "lat": 41.9299792,
    "lng": -87.6438133,
    "name": "Snow Gragon Shavery",
    "streetName": "2618 N Clark St, Chicago, IL 60614"
  },
  {
    "lat": 41.9115838,
    "lng": -87.6350407,
    "name": "Second City ",
    "streetName": "1616 N Wells St, Chicago, IL 60614"
  },
  {
    "lat": 41.8962514,
    "lng": -87.6219521,
    "name": "Lurie Children's hospital",
    "streetName": "225 E. Chicago ave "
  },
  {
    "lat": 41.8971824,
    "lng": -87.621029,
    "name": "Museum of Contemporary Art",
    "streetName": "220 E Chicago Ave"
  },
  {
    "lat": 41.895943,
    "lng": -87.6944109,
    "name": "Heritage restaurant ",
    "streetName": "2700 w chicago ave"
  },
  {
    "lat": 41.8957142,
    "lng": -87.676773,
    "name": "Atomic Cafe",
    "streetName": "1957 W Chicago Ave"
  },
  {
    "lat": 44.9445763,
    "lng": -93.2629321,
    "name": "Modern Times Cafe",
    "streetName": "3200 Chicago Ave"
  },
  {
    "lat": 44.9378997,
    "lng": -93.262332,
    "name": "Jakeeno's Pizza and Pasta",
    "streetName": "3555 Chicago Ave"
  },
  {
    "lat": 42.0498537,
    "lng": -87.677334,
    "name": "1815, Northwestern University",
    "streetName": "1815 Chicago Ave"
  },
  {
    "lat": 42.0317989,
    "lng": -87.6786523,
    "name": "Hoosier Mama Pie Company and Dollop Coffee",
    "streetName": "749 Chicago Ave"
  },
  {
    "lat": 42.0317989,
    "lng": -87.6786523,
    "name": "Dollop Coffee and Hoosier Mama Pie Company",
    "streetName": "749 Chicago ave"
  },
  {
    "lat": 42.0317989,
    "lng": -87.6786523,
    "name": "Dollop Coffee and Hoosier Mama Pie Company",
    "streetName": "749 Chicago Ave"
  },
  {
    "lat": 42.0398215,
    "lng": -87.6800729,
    "name": "Trader Joe’s",
    "streetName": "1211 Chicago Ave"
  },
  {
    "lat": 41.0021287,
    "lng": -95.8948932,
    "name": "Subway",
    "streetName": "902 Chicago Ave"
  },
  {
    "lat": 44.944621,
    "lng": -93.2628817,
    "name": "Modern Times Cafe",
    "streetName": "3200 Chicago Ave S"
  },
  {
    "lat": 44.944621,
    "lng": -93.2628817,
    "name": "Modern Times Cafe",
    "streetName": "3200 Chicago Ave S"
  },
  {
    "lat": 44.9396943,
    "lng": -93.2629006,
    "name": "StevenBe",
    "streetName": "3448 Chicago Ave"
  },
  {
    "lat": 42.0475377,
    "lng": -87.6795313,
    "name": "Whole Foods Market",
    "streetName": "1640 Chicago Ave."
  },
  {
    "lat": 41.7713482,
    "lng": -88.145646,
    "name": "Ward Residence Hall",
    "streetName": "180 E Chicago Ave"
  },
  {
    "lat": 42.8625366,
    "lng": -85.8740497,
    "name": "Mobil",
    "streetName": "3700 Chicago Dr"
  },
  {
    "lat": 41.994363,
    "lng": -87.657132,
    "name": "Metropolis",
    "streetName": "1039 w granville"
  },
  {
    "lat": 41.976398,
    "lng": -87.668214,
    "name": "Jin Ju",
    "streetName": "5203 N. Clark Street"
  },
  {
    "lat": 41.921463,
    "lng": -87.664798,
    "name": "Barnes & Noble Clybourn",
    "streetName": "1441 W. WEBSTER AVE"
  },
  {
    "lat": 41.955184,
    "lng": -87.65455,
    "name": "Howard Brown",
    "streetName": "4025 N Sheridan Rd"
  },
  {
    "lat": 41.983811,
    "lng": -87.656762,
    "name": "Zanzibar",
    "streetName": "1036 N. Bryn Mawr Ave."
  },
  {
    "lat": 41.7883918,
    "lng": -87.598107,
    "name": "Green Hall, UChicago campus",
    "streetName": "5848 S. University Ave."
  },
  {
    "lat": 41.7910098,
    "lng": -87.5964657,
    "name": "5710 LGBTQ and multicultural student center",
    "streetName": "5710 S Woodlawn"
  },
  {
    "lat": 41.9069015,
    "lng": -87.6718357,
    "name": "Filter Coffee Shop",
    "streetName": "1373-75 N Milwaukee Ave"
  },
  {
    "lat": 41.912881,
    "lng": -87.677341,
    "name": "Caffe de Luca",
    "streetName": "1721 N Damen Ave"
  },
  {
    "lat": 41.978284,
    "lng": -87.668518,
    "name": "George's Ice Cream and Sweets",
    "streetName": "5306 N. Clark Street"
  },
  {
    "lat": 42.007867,
    "lng": -87.668074,
    "name": "The Common Cup",
    "streetName": "1501 W Morse Ave"
  },
  {
    "lat": 41.9615203,
    "lng": -87.6750669,
    "name": "Glenn's Diner",
    "streetName": "1820 W. Montrose Ave."
  },
  {
    "lat": 41.9233288,
    "lng": -87.6978093,
    "name": "Cafe Moustache",
    "streetName": "2313 North Milwaukee Avenue"
  },
  {
    "lat": 41.9422497,
    "lng": -87.6444881,
    "name": "Caribou Coffee",
    "streetName": "3300 n broadway st"
  },
  {
    "lat": 41.8821873,
    "lng": -87.6256606,
    "name": "Starbucks 68 E Madison",
    "streetName": "68 E madison"
  },
  {
    "lat": 41.978595,
    "lng": -87.667963,
    "name": "Kopi Cafe",
    "streetName": "5317 N. Clark"
  },
  {
    "lat": 41.8934776,
    "lng": -87.6261792,
    "name": "trader joe's",
    "streetName": "44 East Ontario Street, "
  },
  {
    "lat": 41.9083507,
    "lng": -87.6525453,
    "name": "Whole Foods Market (Lincoln Park)",
    "streetName": "1550 N. Kingsbury St."
  },
  {
    "lat": 42.000149,
    "lng": -87.660402,
    "name": "Loyola Univerity - Damen Student Center",
    "streetName": "6461 North Sheridan Road"
  },
  {
    "lat": 41.8985718,
    "lng": -87.6249154,
    "name": "Fourth Presbyterian church",
    "streetName": "126 E. Chestnut Avenue"
  },
  {
    "lat": 41.8985718,
    "lng": -87.6249154,
    "name": "Fourth Presbyterian church",
    "streetName": "126 E. Chestnut St."
  },
  {
    "lat": 41.8847013,
    "lng": -87.6286851,
    "name": "Oriental Theatre",
    "streetName": "24 W. Randolph St"
  },
  {
    "lat": 41.8923096,
    "lng": -87.6269057,
    "name": "Pizzeria Uno",
    "streetName": "29 E Ohio St "
  },
  {
    "lat": 41.9251161,
    "lng": -87.6526156,
    "name": "DePaul University Art Museum",
    "streetName": "935 W Fullerton Ave"
  },
  {
    "lat": 41.8804857,
    "lng": -87.6222864,
    "name": "Art Institute Modern Wing",
    "streetName": "159 East Monroe"
  },
  {
    "lat": 41.9925101,
    "lng": -87.6603793,
    "name": "lickety split",
    "streetName": "6056 n broadway "
  },
  {
    "lat": 41.942628,
    "lng": -87.702699,
    "name": "Honey butter fried chicken",
    "streetName": "3361 N. Elston Ave"
  },
  {
    "lat": 41.8817574,
    "lng": -87.6318285,
    "name": "Reconciling Ministries Network",
    "streetName": "123 W Madison Street, 21st Floor"
  },
  {
    "lat": 41.9979741,
    "lng": -87.6598257,
    "name": "the coffee shop",
    "streetName": "1135 w Sheridan rd"
  },
  {
    "lat": 41.9886773,
    "lng": -87.660405,
    "name": "North Broadway dental ",
    "streetName": "5856 North Broadway"
  }
]




  