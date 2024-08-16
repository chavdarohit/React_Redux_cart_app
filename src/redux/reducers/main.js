import { combineReducers } from "redux";
import { cartReducer } from "./reducers";

const rootReducer = combineReducers({
  cartReducer: cartReducer
});

export default rootReducer;
