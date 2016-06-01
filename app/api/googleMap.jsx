var axios = require('axios');

const GOOGLE_MAP_GEOCODE_URL = 'http://maps.googleapis.com/maps/api/geocode/json?'


module.exports = {
  getGeographicCoordinate: function (location) {

    var encodedLocation = encodeURIComponent(location);

    // ES6 template string
    var requestUrl = `${GOOGLE_MAP_GEOCODE_URL}&address=${encodedLocation}`;

    //fetch data
    return axios.get(requestUrl).then(function (res) {
      if (res.status != 200) {
        throw new Error(res.data.message);
      }else {
        return res.data.results[0].geometry.location;
      }
    }, function (res) {
      throw new Error(res.statusText);
    });
  }
}
