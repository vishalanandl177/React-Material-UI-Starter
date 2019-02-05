import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import routes from './services/router';
import { Provider } from 'react-redux';
import store from './services/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './containers/Theme';


class App extends Component {

  route = routes;

  routes = (
    <Switch>
      
      { this.route.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={prop.component} />;
      })}
      {/* <Redirect to='/' /> */}
    </Switch>
  );
  render() {
  
    return (
        <Provider store={store}>
          <MuiThemeProvider theme={Theme}>
            { this.routes }
          </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
