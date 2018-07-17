import React from 'react';
import './App.css';

import Container from './components/Container';
import config from './data/config.js';

const App = () => (
  <Container
    api_key={config.api_key}
    secret={config.secret}
  />
);

export default App;
