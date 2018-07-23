import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to='/guitars'>Guitars</NavLink></li>
      <li><NavLink to='/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/planets'>Planets</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;
