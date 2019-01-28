import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from './services/router';

class App extends Component {
   route = routes;
  render() {
    return (
      <Switch>
        { this.route.map((prop, key) => {
          return <Route path={prop.path} key={key} component={prop.component} />;
        })}
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default App;
