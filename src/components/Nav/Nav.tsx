import React from 'react';
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
            <li className="about header-btn"><a href="index.html">About Me</a></li>
            <li className="portfolio header-btn">
              <a href="portfolio.html">Portfolio</a>
            </li>
            <li className="contact header-btn">
              <a href="contact.html">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;