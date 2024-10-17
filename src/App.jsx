import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Header from "./components/Header.jsx";
import HelpPage from "./components/HelpPage.jsx";
import Filters from "./components/Filters.jsx";
import WorldMap from "./components/WorldMap.jsx";

function App() {

  const pageTitles = [
    "Disaster Map",
    "We didn't start the fire",
    "Hurricane Helene was geoengineered by the government to seize and access lithium deposits in Chimney Rock",
    "Global warming is reaalll",
    "Disaster Master",
    "This is fine",
  ];

  const [title, setTitle] = useState(pageTitles[0]);

  const onFilterChange = () => {
    const newTitle = pageTitles[Math.ceil(Math.random() * pageTitles.length - 1)];
    setTitle(newTitle);
  }

  return (
    <div>
      <Header title={title} />

      <Routes>
        <Route path="/gethelp" element={<HelpPage />} />
        <Route
          path="/"
          element={
            <div>
              <Filters onFilterChange={onFilterChange}/>
              <WorldMap />
            </div>
          }
        />
      </Routes>

    </div>
  );
}

export default App;
