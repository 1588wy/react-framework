import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './stores';

import RouteMap from './routes/routeMap.jsx';
// import { PersistGate } from 'redux-persist/es/integration/react'

// const { persistor, appStore } = configureStore();

const appStore = configureStore();

ReactDOM.render(
    <Provider store={appStore}>
      <RouteMap />
    </Provider>
  ,
  document.getElementById('root')
);
