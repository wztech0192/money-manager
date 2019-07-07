import { combineReducers, createStore, applyMiddleware } from 'redux';
import recordReducer from './recordStore/recordReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  record: recordReducer
});

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
