import { createStore, applyMiddleware, compose } from "redux";
import climaReducer from "./reducer/climaReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(climaReducer, composeEnhancers(applyMiddleware()));

export default store;