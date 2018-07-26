import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//component imports
import Container from './components/Container';
import PageNotFound from './components/PageNotFound';
import config from './data/config.js';

//Stateless component responsible for app's routing. Ensures that guitars route is rendered upon app load.
//Api key, route title, and photo category are passed to all routes, statically for most, dynamically for the search/:query
//route. The search routes are also passed search and searching booleans to help the app determine what to display in the
//gallery component in terms of app title v. search results and whether or not search bar should be displayed.
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
