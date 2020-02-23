const request = require('request');

const forecast = (lat, long, callback) => {
   const url = 'https://api.darksky.net/forecast/ce0293e0451bb368f96616a7a2db1fdd/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);
   request({ url, json: true }, (error, {body}) => {
      if (error) {
         callback('Unable to connect to weather services.', undefined);
      } else if (body.error) {
         callback('Unable to get coordinates.', undefined);
      } else {
         callback(undefined, body.currently.summary + ' with a ' + body.currently.precipProbability + '% chance of rain. ' + body.daily.summary +
            '\nIt is currently ' + body.currently.temperature + ' degrees out, feels like temp is around ' + Math.round(body.currently.apparentTemperature) + '\n.Today\'s temperatures will range between ' + Math.round(body.daily.data[0].temperatureLow) + ' & ' + Math.round(body.daily.data[0].temperatureHigh))
      }
   })
}

module.exports = forecast;