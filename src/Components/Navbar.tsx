import React, { useState } from "react";
import { FiAirplay, FiX, FiMenu } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="#">
              MUT <FiAirplay />
            </a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMoblieMenu}>
              <a href="#">Home</a>
            </li>
            <li className="menu-link" onClick={closeMoblieMenu}>
              <a href="#">About</a>
            </li>
            <li className="menu-link" onClick={closeMoblieMenu}>
              <a href="#">Job</a>
            </li>
            <li className="menu-link" onClick={closeMoblieMenu}>
              <a href="#">Contact</a>
            </li>
            <li className="menu-link" onClick={closeMoblieMenu}>
              <a href="#">Login/Signup</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
