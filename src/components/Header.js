import React from 'react';

import Form from './Form';
import Navigation from './Navigation';

const Header = (props) => (
  <header>
    {props.search ? <Form /> : null}
    <Navigation />
  </header>
);

export default Header;
