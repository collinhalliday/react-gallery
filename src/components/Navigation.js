import React from 'react';
import { NavLink } from 'react-router-dom';

//Includes navlinks for each route to direct app to appropriate route when associate link is clicked by user.
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
