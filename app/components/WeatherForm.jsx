import React from "react";

const WeatherForm = React.createClass({

    //
    onFormSubmit: function (e) {
        e.preventDefault();

        let location = this.refs.location.value;
        // validate input
        if (location.length > 0) {
            this.refs.location.value = ""; // clear field
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
    }
});

module.exports = WeatherForm;
