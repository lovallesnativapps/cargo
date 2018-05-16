import { combineReducers, createStore, applyMiddleware } from 'redux';
//import promise from 'redux-promise';

import AppReducer from './app';
import UsersReducer from './users';


const rootReducer = combineReducers({
    app: AppReducer,
    users: UsersReducer,
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(rootReducer);