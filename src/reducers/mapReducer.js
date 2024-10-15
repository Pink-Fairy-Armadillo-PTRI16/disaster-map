import * as types from '../constants/actionTypes';

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
    'Temperature Extremes' ],
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

    default: {
      return state;
    }
  }

}

export default mapReducer;