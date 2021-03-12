console.log('hello world')

$.getJSON(
    'https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=true&unisex=true&query=Chicago',
    function(data) {
        console.log(data)

        let firstLat = data[0].latitude
        let firstLong = data[0].longitude

        console.log(firstLat)
        console.log(firstLong)
    }
)



  