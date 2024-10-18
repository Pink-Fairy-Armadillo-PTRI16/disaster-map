import * as types from '../constants/actionTypes';
import React from 'react';

const pageTitles = [
  // "Disaster Map",
  "a.k.a. Fire Map",
  "We didn't start the fire",
  'It was always burning, since the world\'s been turning',
  "Hurricane Helene was (not) geoengineered by the government to seize and access lithium deposits in Chimney Rock",
  "Global warming is reaalll",
  "Disaster Master",
  "This is fine",
  <img sizes='(max-width:10px), 10px, 10px' src="https://media.tenor.com/vxFNoJHV3I4AAAAM/chiquichico.gif"></img>,
];

const initialState = {
  locations: [],
  selectedMarker: null,
  limit: 100,
  filters: ['Wildfires', 
    'Earthquakes', 
    'Severe Storms',
    'Floods',
    'Volcanoes', 
    'Sea and Lake Ice', 
    'Drought', 
    'Dust and Haze', 
    'Landslides', 
    'Manmade', 
    'Snow', 
    'Water Color', 
    'Temperature Extremes' 
  ],
  title: '',
  date: '',
};



const mapReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.SET_LOCATIONS:

      return {
        ...state,
        locations: action.payload,
      }

    case types.SELECT_MARKER:

      return {
        ...state,
        selectedMarker: action.payload,
      }

    case types.SET_LIMIT:

    // console.log('limitReducer', action.payload);
      return {
        ...state,
        limit: action.payload,
      }
      
    case types.SET_FILTER:
      // console.log(state.filters);
      return {
        ...state,
        filters: action.payload,
      }

    case types.SET_TITLE:
      let newTitle = state.title;
      while(newTitle == action.payload){
        newTitle = pageTitles[Math.ceil(Math.random() * pageTitles.length - 1)];
      }
      // console.log(newTitle);
      return {
        ...state,
        title: newTitle,
      }

    case types.SET_UPDATE:

      return {
        ...state,
        date: action.payload,
      }

    default: {
      return state;
    }
  }

}

export default mapReducer;