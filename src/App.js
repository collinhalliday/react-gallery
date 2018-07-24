import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Container from './components/Container';
import PageNotFound from './components/PageNotFound';
import config from './data/config.js';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact path="/"
        render={ () =>
          <Redirect to="/guitars" />
        }
      />
      <Route
        exact path="/guitars"
        render={ () =>
          <Container
            title="Guitars"
            category="guitars"
            api_key={config.api_key}
          />
        }
      />
      <Route
        exact path="/dogs"
        render={ () =>
          <Container
            title="Dogs"
            category="dogs"
            api_key={config.api_key}
          />
        }
      />
      <Route
        exact path="/planets"
        render={ () =>
          <Container
            title="Planets"
            category="planets"
            api_key={config.api_key}
          />
        }
      />
      <Route
        exact path="/search"
        render={ () =>
          <Container
            title="Recently Posted"
            category="recent"
            api_key={config.api_key}
            search={true}
            searching={false}
          />
        }
      />
      <Route
        exact path="/search/:query"
        render={ ({match}) => {
          return (
            <Container
              category={match.params.query}
              api_key={config.api_key}
              search={true}
              searching={true}
            />
          );
         }
        }
      />
      <Route
        component={PageNotFound}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
