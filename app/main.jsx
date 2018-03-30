import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './stores';

import RouteMap from './routes/routeMap.jsx';
import { PersistGate } from 'redux-persist/es/integration/react'

const { persistor, appStore } = configureStore();

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={appStore}>
      <RouteMap />
    </Provider>
  </PersistGate>
  ,
  document.getElementById('root')
);
