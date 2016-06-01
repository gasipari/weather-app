import React from "react";
import { GoogleMap, GoogleMapLoader, Marker} from "react-google-maps";

const Map = React.createClass({

    render: function (){
        const {coordinate} = this.props;
        return (
    <div>
    <GoogleMapLoader
      containerElement={
        <div
          style={{
              height: "300px"
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          defaultZoom={6}
          defaultCenter={{lat: coordinate.lat, lng: coordinate.lng}}>
          <Marker position={coordinate}/>
        </GoogleMap>
      }
    />
  </div>
  );
    }
});

module.exports = Map;
