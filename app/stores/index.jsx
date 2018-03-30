import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/reducer';
import { globalVar } from '../constants/GlobalVariable';
import { persistStore } from 'redux-persist';
import promiseMiddleware from '../axios/promiseMiddleware';

export default function configureStore(initialState) {
  let appStore = globalVar.appStore;
  let middleware = [thunkMiddleware, promiseMiddleware];
  if (!appStore) {
    appStore = createStore(
      reducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
        typeof window.devToolsExtension === 'function'
          ? window.devToolsExtension()
          : f => f
      )
    );
    globalVar.appStore = appStore;
  }
  let persistor = persistStore(appStore)
  return { persistor, appStore };
}
