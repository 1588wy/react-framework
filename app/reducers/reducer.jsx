import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from './userReducer';
import { createStore } from 'redux';
const config = {
    key: 'root',
    storage: storage
}
const reducer = persistCombineReducers(config, { reducers });
export default reducer;
