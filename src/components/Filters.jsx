import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../actions/actions";

const Filters = () => {

  const locations = useSelector(store => store.maps.locations)
  const limit = useSelector(store => store.maps.limit);
  const filters = useSelector(store => store.maps.filters);
  const title = useSelector(store => store.maps.title);
  const dispatch = useDispatch();

  // const testFilter = () => dispatch(actions.setFilterActionCreator(filters))
  const [getLimit, setLimit] = useState(limit);
  const setLimitStore = () => {
    console.log('limit', getLimit)
    dispatch(actions.setLimitActionCreator(getLimit));
  }
  
  const [getFilters, setFilters] = useState(() => {
    const initialFilters = {};
    for(let i = 0; i < filters.length; i++){
      initialFilters[filters[i]] = filters[i]
    }
    return initialFilters;
  });

  const handleFilterChange = (event) => {
    // console.log('value?', event.target.innerHTML);
    const unSplitFilter = event.target.innerHTML;
    const filter = unSplitFilter.substring(0, unSplitFilter.indexOf(':'));
    console.log(filter)
    getFilters[filter] ? delete getFilters[filter] : getFilters[filter] = filter;
    console.log('getFilters', getFilters);
    setFilters(getFilters);
    dispatch(actions.setFilterActionCreator(Object.values(getFilters)));
    //onFilterChange();
    dispatch(actions.setTitleActionCreator(title))
  }

 
  return (
  <div className="filter-btn-container">
    
    <h3><b>Filters</b></h3>
    <button id="wf-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Wildfires'] ? 'blue' : 'lightblue'}}>Wildfires: {locations.filter((el) => el.type == 'wildfires').length}</button>
    <button id="eq-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Earthquakes'] ? 'blue' : 'lightblue'}}>Earthquakes: {locations.filter((el) => el.type == 'earthquakes').length} </button>
    <button id="storm-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Severe Storms'] ? 'blue' : 'lightblue'}}>Severe Storms: {locations.filter((el) => el.type == 'severe storms').length}</button>
    <button id="flood-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Floods'] ? 'blue' : 'lightblue'}}>Floods: {locations.filter((el) => el.type == 'floods').length}</button>
    <button id="volcanoes-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Volcanoes'] ? 'blue' : 'lightblue'}}>Volcanoes: {locations.filter((el) => el.type == 'volcanoes').length}</button>
    <button id="ice-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Sea and Lake Ice'] ? 'blue' : 'lightblue'}}>Sea and Lake Ice: {locations.filter((el) => el.type == 'sea and lake ice').length}</button>
    <button id="drought-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Drought'] ? 'blue' : 'lightblue'}}>Drought: {locations.filter((el) => el.type == 'drought').length}</button>
    <button id="dust-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Dust and Haze'] ? 'blue' : 'lightblue'}}>Dust and Haze: {locations.filter((el) => el.type == 'dust and haze').length}</button>
    <button id="landslide-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Landslides'] ? 'blue' : 'lightblue'}}>Landslides: {locations.filter((el) => el.type == 'landslides').length}</button>
    <button id="manmade-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Manmade'] ? 'blue' : 'lightblue'}}>Manmade: {locations.filter((el) => el.type == 'manmade').length}</button>
    <button id="snow-btn" onClick={handleFilterChange} style ={{backgroundColor: getFilters['Snow'] ? 'blue' : 'lightblue'}}>Snow: {locations.filter((el) => el.type == 'snow').length}</button>
    <button id="water-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Water Color'] ? 'blue' : 'lightblue'}} >Water Color: {locations.filter((el) => el.type == 'water color').length}</button>
    <button id="temp-btn" onClick={handleFilterChange} style={{backgroundColor: getFilters['Temperature Extremes'] ? 'blue' : 'lightblue'}}>Temperature Extremes: {locations.filter((el) => el.type == 'temperature extremes').length}</button>

    <div className="limit-container">
      Maximum number of disasters shown:
      <input type="text" placeholder="limit" value={getLimit} onChange={(e) =>  setLimit(e.target.value)}/>
      <button id='limit-btn'onClick={setLimitStore}><b>Update limit</b></button>
    </div>
  </div>
  );
};

export default Filters;
