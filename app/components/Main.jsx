import React from "react";
import Nav from "Nav";

const Main = (props) => {
    return (
    <div>
      <Nav />
      <div className="row">
        <div className="colums medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
