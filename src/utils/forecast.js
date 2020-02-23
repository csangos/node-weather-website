const request = require('request');

const forecast = (lat, long, callback) => {
   const url = 'https://api.darksky.net/forecast/ce0293e0451bb368f96616a7a2db1fdd/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);
   request({ url, json: true }, (error, {body}) => {
      if (error) {
         callback('Unable to connect to weather services.', undefined);
      } else if (body.error) {
         callback('Unable to get coordinates.', undefined);
      } else {
         callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
      }
   })
}

module.exports = forecast;