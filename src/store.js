import {configureStore } from '@reduxjs/toolkit';
import mapReducer from './reducers/mapReducer';

const store = configureStore({
  reducer: {
    maps: mapReducer
  }
})

export default store;