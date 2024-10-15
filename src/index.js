import React from "react";
import { createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

// console.log("Hello world");

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store ={store}>
      <App />
    </Provider>
);

// async function initMap() {
//     console.log("Maps JavaScript API loaded.");
// }
  
// window.initMap = initMap;