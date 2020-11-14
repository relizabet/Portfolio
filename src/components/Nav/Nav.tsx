import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC<{}> = () => {
    return (
        <div className="justify">
        <div className="logo">
          <div className="logo-div header-btn">
            <a href="index.html" id="logo-text">REC</a>
          </div>
        </div>
        <nav>
          <ul>
            <li className="about header-btn"><Link to="/">About Me</Link></li>
            <li className="portfolio header-btn">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="contact header-btn">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;