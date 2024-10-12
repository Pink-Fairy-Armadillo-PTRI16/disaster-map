// "use client";

import React from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "./components/PoiMarkers.jsx"

function App() {

  // const position = { lat: 53.54, lng: 10 };

// const Poi ={ key: string, location: google.maps.LatLngLiteral }
// const locations = [
//   {key: 'operaHouse', type: 'wildfire', location: { lat: -33.8567844, lng: 151.213108  }},
//   {key: 'tarongaZoo', type: 'earthquake', location: { lat: -33.8472767, lng: 151.2188164 }},
//   {key: 'manlyBeach', type: 'wildfire', location: { lat: -33.8209738, lng: 151.2563253 }},
//   {key: 'hyderPark', type: 'wildfire', location: { lat: -33.8690081, lng: 151.2052393 }},
//   {key: 'theRocks', type: 'wildfire', location: { lat: -33.8587568, lng: 151.2058246 }},
//   {key: 'circularQuay', type: 'wildfire', location: { lat: -33.858761, lng: 151.2055688 }},
//   {key: 'harbourBridge', type: 'wildfire', location: { lat: -33.852228, lng: 151.2038374 }},
//   {key: 'kingsCross', type: 'wildfire', location: { lat: -33.8737375, lng: 151.222569 }},
//   {key: 'botanicGardens', type: 'wildfire', location: { lat: -33.864167, lng: 151.216387 }},
//   {key: 'museumOfSydney', type: 'wildfire', location: { lat: -33.8636005, lng: 151.2092542 }},
//   {key: 'maritimeMuseum', type: 'earthquake', location: { lat: -33.869395, lng: 151.198648 }},
//   {key: 'kingStreetWharf', type: 'earthquake', location: { lat: -33.8665445, lng: 151.1989808 }},
//   {key: 'aquarium', type: 'earthquake', location: { lat: -33.869627, lng: 151.202146 }},
//   {key: 'darlingHarbour', type: 'earthquake', location: { lat: -33.87488, lng: 151.1987113 }},
//   {key: 'barangaroo', type: 'earthquake',  location: { lat: - 33.8605523, lng: 151.1972205 }},
// ];

  return (
    <div>
       {/* <Routes>
       <Route exact path="/donation" element={<DonationPage/>} />
       </Routes> */}
    <APIProvider apiKey={"AIzaSyBDpGQlSlqW_QFEdELXCo9KAtVoNSxSgT8"} onLoad={() => console.log('Maps API has loaded.')}>
      <h1><center>Natural Disaster GIFs</center></h1>
      <div style={{ height: "90vh" }}>
        <Map 
          defaultZoom={9} 
          defaultCenter = { {lat : -33.860664, lng: 151.208138}}
          mapId="4c59bfd5b8bf65d6"
        >
          <PoiMarkers />
        </Map>
      </div>
    </APIProvider>
    </div>
  )
}

export default App;







// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <div>
//       Testing react from scratch
//       <button onClick={increment}>Add 1</button>
//       {counter}
//     </div>
//   )
// };

// export default App;