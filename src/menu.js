import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { downloadCV } from './utils';

function Menu() {
  // Get the current location using useLocation from React Router
  const location = useLocation();



  return (
    <div className="menu-area" id="menu-area">
     
      <div className="menu" id="menu">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={location.pathname === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></li>
          <li><Link to="#" onClick={downloadCV}>Resume</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
