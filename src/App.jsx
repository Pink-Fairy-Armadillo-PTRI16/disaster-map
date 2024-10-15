// "use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, MapCameraChangedEvent } from "@vis.gl/react-google-maps";
import PoiMarkers from "./components/PoiMarkers.jsx"
import MarkerWithInfo from "./components/MarkerWithInfo.jsx";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import './style.scss';
import * as actions from '../src/actions/actions';

function App() {

  
  const limit = useSelector(store => store.maps.limit);
  const filters = useSelector(store => store.maps.filters);
  const dispatch = useDispatch();

  const testFilter = () => dispatch(actions.setFilterActionCreator(filters))
  const [getLimit, setLimit] = useState(limit);
  const setLimitStore = () => {
    console.log('limit', getLimit)
    dispatch(actions.setLimitActionCreator(getLimit));
  }
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [getFilters, setFilters] = useState({});
  
  const toggleDarkMode = ()=> {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  }

  // ['wildfires', 
  //   'earthquake', 
  //   'severe storms', 
  //   'floods', 
  //   'volcanoes', 
  //   'sea and lake ice', 
  //   'drought', 
  //   'dust and haze', 
  //   'landslides', 
  //   'manmade', 
  //   'snow', 
  //   'water color', 
  //   'temperature extremes' ],

  const handleFilterChange = (event) => {
    // console.log('value?', event.target.innerHTML);
    const filter = event.target.innerHTML;
    getFilters[filter] ? delete getFilters[filter] : getFilters[filter] = filter;
    console.log('getFilters', getFilters);
    setFilters(getFilters);
    dispatch(actions.setFilterActionCreator(Object.values(getFilters)));
  }


  return (
    <div>
       {/* <Routes>
       <Route exact path="/donation" element={<DonationPage/>} />
       </Routes> */}
    <APIProvider apiKey={"AIzaSyBDpGQlSlqW_QFEdELXCo9KAtVoNSxSgT8"} onLoad={() => console.log('Maps API has loaded.')}>
      <h1><center>We didn't start the fire</center></h1>
      <div className="darkmode-toggle"><button id = 'btn' onClick={toggleDarkMode}>{isDarkMode ? <MdOutlineDarkMode /> :<MdDarkMode />     }</button></div>
        <div className="filter-btn">
          <input type="text" placeholder="limit" value={getLimit} onChange={(e) =>  setLimit(e.target.value)}/>
          <button id='limit-btn'onClick={setLimitStore}>LimitMap</button>
          <div>
          Filters
          <button id="wf-btn" onClick={handleFilterChange}>Wildfires</button>
          <button id="eq-btn" onClick={handleFilterChange}>Earthquakes</button>
          <button id="storm-btn" onClick={handleFilterChange}>Severe Storms</button>
          <button id="flood-btn" onClick={handleFilterChange}>Floods</button>
          <button id="volcanoes-btn" onClick={handleFilterChange}>Volcanoes</button>
          <button id="ice-btn" onClick={handleFilterChange}>Sea and Lake Ice</button>
          <button id="drought-btn" onClick={handleFilterChange}>Drought</button>
          <button id="dust-btn" onClick={handleFilterChange}>Dust and Haze</button>
          <button id="landslide-btn" onClick={handleFilterChange}>Landslides</button>
          <button id="manmade-btn" onClick={handleFilterChange}>Manmade</button>
          <button id="snow-btn" onClick={handleFilterChange}>Snow</button>
          <button id="water-btn" onClick={handleFilterChange}>Water Color</button>
          <button id="temp-btn" onClick={handleFilterChange}>Temperature Extremes</button>
          {/* <button onClick={testFilter}>Test filter</button> */}
          </div>
    <div>
      <ul>
        <li>Submit</li>
        <li>Red Cross</li>
        <button>Login</button>
      </ul>
    </div>
        
          
        </div>
      <div style={{ height: "90vh" }}>
        <Map 
          defaultZoom={2}  
          defaultCenter = { {lat : 0, lng: 0}}
          mapId="4c59bfd5b8bf65d6"

        >
          <PoiMarkers />
          {/* <MarkerWithInfo /> */}
        </Map>
      </div>
    </APIProvider>
    </div>
  )
}

export default App;