import * as types from '../constants/actionTypes';

export const setLocationsCreator = (locations) => ({
  type: types.SET_LOCATIONS,
  payload: locations,
})

export const setMarkerCreator = (marker) => ({
  type: types.SELECT_MARKER,
  payload: marker,
})