import { createStore, combineReducers, compose } from "redux";

import loginUser from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  loginUser,
});

const store = createStore(reducer, {}, composeEnhancers());

export default store;
