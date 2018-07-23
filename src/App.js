import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Container from './components/Container';
import config from './data/config.js';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/guitars"
        render={ () =>
          <Container
            title="Guitars"
            searchTerm="guitars"
            api_key={config.api_key}
          />
        }
      />
      <Route
        path="/dogs"
        render={ () =>
          <Container
            title="Dogs"
            searchTerm="dogs"
            api_key={config.api_key}
          />
        }
      />
      <Route
        path="/planets"
        render={ () =>
          <Container
            title="Planets"
            searchTerm="planets"
            api_key={config.api_key}
          />
        }
      />
      <Route
        exact path="/search"
        render={ () =>
          <Container
            title="Recently Posted"
            searchTerm="recent"
            api_key={config.api_key}
            search={true}
            searching={false}
          />
        }
      />
      <Route
        path="/search/:query"
        render={ ({match}) => {
          return (
            <Container
              searchTerm={match.params.query}
              api_key={config.api_key}
              search={true}
              searching={true}
            />
          );
         }
        }
      />
      <Redirect from="/" to="/guitars" />
      <Route
        render={ () =>
          <Container
            notFound={true}
          />
        }
      />
    </Switch>
  </BrowserRouter>
);

export default App;
