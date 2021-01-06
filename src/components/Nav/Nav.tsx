import React, { useRef } from "react";
import "../../App.css";
import { useDetectOutsideClick } from "./Click";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (

    <div className="justify" >
      <div className="logo">
        <div className="logo-div header-btn">
          <li className="logo-text link-style" >REC</li>
        </div>
      </div>
      <div className="container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <span><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span>
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio-link">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  );
}