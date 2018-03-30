import React, { Component } from 'react';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import App from '../container/App';
import Home from '../container/Home';
import Detail from '../container/Detail'

class RouteMap extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <route path='/detail' component={Detail}></route>
        </Route>
      </Router>
    );
  }
}

export default RouteMap;
