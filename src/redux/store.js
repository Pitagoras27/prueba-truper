import { createStore, combineReducers, compose } from "redux";

import loginUser from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(loginUser, composeEnhancers());

export default store;
