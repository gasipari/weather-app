var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. It is a demonstration of react/redux features and foundation framework</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://github.com/facebook/react">React.js</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org/">Open Weather Map</a> - Open Weather Map API was used to search for weather data by city name.
        </li>
      </ul>
  </div>
  );
}

module.exports = About;
