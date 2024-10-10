// "use client";

import React from "react";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, MapCameraChangedEvent } from "@vis.gl/react-google-maps";

function App() {

  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={"AIzaSyBDpGQlSlqW_QFEdELXCo9KAtVoNSxSgT8"} onLoad={() => console.log('Maps API has loaded.')}>
      <div style={{ height: "100vh" }}>
        <Map 
          zoom={9} 
          center={position}
        >

        </Map>
      </div>
      <h1>Hello world</h1>
    </APIProvider>
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