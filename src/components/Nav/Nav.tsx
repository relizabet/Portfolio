import React from 'react';
import { Link } from "react-router-dom";

const Nav: React.FC<{}> = () => {
    return (
      <div className="justify">
        <div className="logo">
          <div className="logo-div header-btn">
            <Link className="logo-text link-style" to="/home">REC</Link>
          </div>
        </div>
        <nav>
          <ul>
            <li className="about header-btn"><Link className="link-style" to="/home">About Me</Link></li>
            <li className="portfolio header-btn">
              <Link className="link-style" to="/portfolio">Portfolio</Link>
            </li>
            <li className="contact header-btn">
              <Link className="link-style" to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}


export default Nav;