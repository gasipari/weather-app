import React from "react";

const About = () => { // stateless functional components
    return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This application was build using:</p>
      <ul>
        <li>
          <a href="https://github.com/facebook/react" target="_blank">React.js</a> - A JavaScript library for building user interfaces.
        </li>
        <li>
          <a href="http://foundation.zurb.com/" target="_blank">Zurb Foundation</a> - The most advanced responsive front-end framework in the world.
        </li>
        <li>
          <a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - Open Weather Map API used to search for weather data by city name.
        </li>
        <li>
          <a href="https://developers.google.com/maps/documentation/javascript/" target="_blank">Google Maps APIs</a> - Google Map API used to retrieve geographic coordinates data by city name.
        </li>
      </ul>
      <p>For more details, please visit the <a href="https://github.com/gasipari/weather-app"
        target="_blank">repository</a> on github.</p>
  </div>
  );
};

module.exports = About;
