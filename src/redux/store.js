import { createStore, applyMiddleware, compose } from "redux";
import climaReducer from "./reducer/climaReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    climaReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;