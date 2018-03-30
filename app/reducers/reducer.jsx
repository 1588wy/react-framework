// import { persistStore, persistCombineReducers } from 'redux-persist';
// import storage from 'redux-persist/es/storage';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
// const config = {
//     key: 'root',
//     storage: storage
// }
// const reducer = persistCombineReducers(config, { reducers });
const reducer = combineReducers({userReducer});
export default reducer;
