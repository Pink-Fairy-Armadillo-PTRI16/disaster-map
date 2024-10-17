import * as types from '../constants/actionTypes';

export const setLocationsActionCreator = (locations) => ({
  type: types.SET_LOCATIONS,
  payload: locations,
})

export const setMarkerActionCreator = (marker) => ({
  type: types.SELECT_MARKER,
  payload: marker,
})

export const setLimitActionCreator = (limit) => ({
  type: types.SET_LIMIT,
  payload: limit,
})

export const setFilterActionCreator = (filter) => ({
  type: types.SET_FILTER,
  payload: filter,
})

export const setTitleActionCreator = (title) => ({
  type: types.SET_TITLE,
  payload: title,
})