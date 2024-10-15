import React from "react";
import { createRoot} from "react-dom/client";
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import { BrowserRouter } from "react-router-dom";

// console.log("Hello world");

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store ={store}>
      <App />
    </Provider>
    </BrowserRouter>
);

// async function initMap() {
//     console.log("Maps JavaScript API loaded.");
// }
  
// window.initMap = initMap;