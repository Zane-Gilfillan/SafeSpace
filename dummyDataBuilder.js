const fs = require('fs');
const axios = require('axios').default;

axios.get('https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&ada=true&unisex=true&query=Chicago').then(({data}) => {
    console.log(data)
        var desiredObject = data.map(element => {
            return {
                // position: {
                lat: parseFloat(element.latitude),
                lng: parseFloat(element.longitude),
                // },
                name: element.name,
                streetName: element.street
            }
        });
        fs.writeFile('bathroomLocations.JSON', JSON.stringify(desiredObject, null, 2), function (err) {
            if (err) throw err;
            console.log(success);
        })

    }).catch(err => {
        console.error(err)
    })