import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/main";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

// const store = createStore(rootReducer);

export default store;
