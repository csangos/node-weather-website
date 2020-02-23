const request = require('request');

const geoCode = (address, callback) => {
   const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3NhbmdvcyIsImEiOiJjazZvMTh6dG0wNWluM2VtaXh3NHpodGcwIn0.rWz4zZAOix_FbtcdT4xhjw&limit=1'
   request({url, json: true }, (error,{body}) => {
      if (error) {
         callback('Unable to connect to location services.', undefined);
      } else if (body.features.length === 0) {
         callback('Unable to find location.', undefined);
      } else {
         callback(undefined, {
            lat: body.features[0].center[1],
            long: body.features[0].center[0],
            location: body.features[0].place_name
         })
      }
   })
}

module.exports = geoCode;