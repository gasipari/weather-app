var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build using:</p>
      <ul>
        <li>
          <a href="https://github.com/facebook/react">React.js</a> - A JavaScript library for building user interfaces.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - Open Weather Map API used to search for weather data by city name.
        </li>
      </ul>
      <p>For more details, please visit the <a href="https://github.com/gasipari/weather-app"
        target="_blank">repository</a> on github.</p>
  </div>
  );
}

module.exports = About;
