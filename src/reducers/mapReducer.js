import * as types from '../constants/actionTypes';

const initialState = {
  locations: [],
  selectedMarker: null,
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

    default: {
      return state;
    }
  }

}

export default mapReducer;