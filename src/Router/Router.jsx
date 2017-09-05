import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router';

import App from 'components/App';
import history from 'redux/history';
import HomePage from 'pages/HomePage';
import store from 'redux/store';

class Router extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>
            <Route exact path="/" component={HomePage}/>
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Router;
