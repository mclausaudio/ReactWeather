var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8ddaec64a602eee7da61c122ddcfbdad&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log(`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`);

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}


//
//
// var axios = require('axios');
//
// const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?q=';
// var key = '&appid=b6907d289e10d714a6e88b30761fae22';
//
// //cd231340ca4330baff41d035aa2ed150
//
// //http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
//
// module.exports = {
//   getTemp: function (location) {
//     var encodedLocation = encodeURIComponent(location);
//     var requestUrl = OPEN_WEATHER_MAP_URL + encodedLocation + key;
//     // `${OPEN_WEATHER_MAP_URL}${encodedLocation}${key}`;
//
//     return axios.get(requestUrl).then(function (res) {
//       if (res.data.cod && res.data.message) {
//         throw new Error(res.data.message);
//       } else {
//         return res.data.main.temp;
//       }
//     }, function(res){
//       throw new Error(res.data.message);
//     });
//
//   }
// }
