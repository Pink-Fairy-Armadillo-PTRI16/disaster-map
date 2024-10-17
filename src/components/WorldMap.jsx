import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PoiMarkers from "./PoiMarkers.jsx";

const WorldMap = () => {

  return (
    <APIProvider apiKey={"AIzaSyBDpGQlSlqW_QFEdELXCo9KAtVoNSxSgT8"} onLoad={() => console.log('Maps API has loaded.')}>
      <div style={{ height: "90vh" }}>
        <Map 
          defaultZoom={2}  
          defaultCenter = { {lat : 0, lng: 0}}
          mapId="4c59bfd5b8bf65d6"
        >
          <PoiMarkers />
        </Map>
      </div>
    </APIProvider>
  )
}

export default WorldMap;