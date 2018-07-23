import React from 'react';

import Form from './Form';
import Navigation from './Navigation';

const Header = (props) => (
  <header>
    {props.search ? <Form searchHandler={props.performSearch} /> : null}
    <Navigation />
  </header>
);

export default Header;
