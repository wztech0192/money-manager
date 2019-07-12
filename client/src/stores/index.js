import { combineReducers, createStore, applyMiddleware } from 'redux';
import recordReducer from './recordStore/recordReducer';
import userReducer from './userStore/userReducer';
import utilReducer from './utilStore/utilReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  record: recordReducer,
  user: userReducer,
  util: utilReducer
});

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
