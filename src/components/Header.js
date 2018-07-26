import React from 'react';

//Component imports
import Form from './Form';
import Navigation from './Navigation';

//Always renders navigation component, but only renders Form component if the search prop is present/true.
const Header = (props) => (
  <header>
    {props.search ? <Form /> : null}
    <Navigation />
  </header>
);

export default Header;
