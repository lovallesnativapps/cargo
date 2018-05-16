import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import '../DashboardContent/dashboard.css';


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className="map_component"/>,
    containerElement: <div className="map_component" />,
    mapElement: <div className="map_component"/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 40.730, lng: -73.915 }}>
    {props.isMarkerShown && <Marker position={{ lat: -14.397, lng: 15.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default MyMapComponent;