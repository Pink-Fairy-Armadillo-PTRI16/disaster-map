import * as types from '../constants/actionTypes';

const initialState = {
  locations: [],
};

const mapReducer = (state = initialState, action) => {

  switch(action.type) {

    case types.SET_LOCATIONS:

      return {
        ...state,
        locations: action.payload,
      }

    default: {
      return state;
    }
  }

}

export default mapReducer;