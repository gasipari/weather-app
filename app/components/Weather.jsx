var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  //
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 90
    }
  },

  //
  handleSearch: function (location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
        alert(errorMessage);
    })
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
  },

  render: function () {
    var {location,temp} = this.state;
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
