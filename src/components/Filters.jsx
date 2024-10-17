import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../actions/actions";

const Filters = ({ onFilterChange}) => {

  const limit = useSelector(store => store.maps.limit);
  const filters = useSelector(store => store.maps.filters);
  const dispatch = useDispatch();

  // const testFilter = () => dispatch(actions.setFilterActionCreator(filters))
  const [getLimit, setLimit] = useState(limit);
  const setLimitStore = () => {
    console.log('limit', getLimit)
    dispatch(actions.setLimitActionCreator(getLimit));
  }
  
  const [getFilters, setFilters] = useState({});

  const handleFilterChange = (event) => {
    // console.log('value?', event.target.innerHTML);
    const filter = event.target.innerHTML;
    getFilters[filter] ? delete getFilters[filter] : getFilters[filter] = filter;
    console.log('getFilters', getFilters);
    setFilters(getFilters);
    dispatch(actions.setFilterActionCreator(Object.values(getFilters)));
    onFilterChange();
  }

  return (
  <div className="filter-btn">
    
    <h3><b>Filters</b></h3>
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

    <div>
      <input type="text" placeholder="limit" value={getLimit} onChange={(e) =>  setLimit(e.target.value)}/>
      <button id='limit-btn'onClick={setLimitStore}><b>Limit Map</b></button>
    </div>
  </div>
  );
};

export default Filters;