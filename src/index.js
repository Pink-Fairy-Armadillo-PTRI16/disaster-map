import React from "react";
import { createRoot} from "react-dom/client";
import App from './App.jsx';

// console.log("Hello world");

const root = createRoot(document.getElementById('root'));

root.render(<App />);

// async function initMap() {
//     console.log("Maps JavaScript API loaded.");
// }
  
// window.initMap = initMap;