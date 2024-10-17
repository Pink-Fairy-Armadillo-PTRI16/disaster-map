import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
     
    } else {
      document.body.classList.add("dark-mode");

    }
  };

  // const title = useSelector(store => store.maps.title);

  // console.log(title);

  return (
    <div className="header">
      <div className="navBar">
        <div className="nav-left">
        <ul className="nav">
          <Link to="/" className="header-btn">
            Home
          </Link>
          <Link to="/submit" className="header-btn">
            Submit
          </Link>
          <Link to="/links" path="/links" className="header-btn">
            Links
          </Link>
          <Link to="/gethelp" path="/getgelp" className="header-btn">
            Get Help
          </Link>
        </ul>
        </div>

        <div className="nev-right">
          <ul className="nav">
          <LoginModal />
          <div className="darkmode-toggle">
            <button id="darkmode-btn" onClick={toggleDarkMode}>
              {isDarkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
            </button>
          </div>
          </ul>
        </div>

      </div>
      {/* <div className="title">
      <h1>
        <center>{title}</center>
      </h1>
      </div> */}
    </div>
  );
};
export default Header;
