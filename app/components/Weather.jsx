import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import openWeatherMap from "openWeatherMap";
import ErrorModal from "ErrorModal";
import Map from "Map";
import googleMap from "googleMap";

const Weather = React.createClass({
  //
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        let that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            // get coordinates
            googleMap.getGeographicCoordinate(location).then(function (coordinate) {
                that.setState({
                    location: location,
                    temp: temp,
                    coordinate: coordinate,
                    isLoading: false
                });

            }, function (e) {
                that.setState({
                    isLoading: false,
                    errorMessage: e.message
                });
            });
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    // this.setState({
    //   location: location,
    //   temp: 23
    // })
    },
    componentDidMount: function () {
        let location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
      // reset the query
            window.location.hash = "#/";
        }
    },
  // needed for nav query in homepage
    componentWillReceiveProps: function (newProps) {
        let location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
      // reset the query
            window.location.hash = "#/";
        }
    },
    render: function () {
        let {isLoading, location, temp, errorMessage, coordinate} = this.state;
        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return (
          <div>
            <WeatherMessage location={location} temp={temp}/>
            <Map coordinate={coordinate} location={location} />
          </div>
        );
            }
        }

        function renderError () {
            if (typeof errorMessage === "string") {
                return (
          <ErrorModal message={errorMessage}/>
        );
            }
        }

        return (
      <div>
        <h2 className="text-center page-title" >Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
    }
});

module.exports = Weather;
