import { createStore } from 'redux';
import mapReducer from './reducers';

const store = configureStore({
  reducer: {
    maps: mapReducer
  }
})