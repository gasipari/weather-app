import React from "react";

const WeatherMessage = ({location, temp}) => {
    return (
    <h3 className="text-center">It is {temp} °C in {location}.</h3>
  );
};

module.exports = WeatherMessage;
