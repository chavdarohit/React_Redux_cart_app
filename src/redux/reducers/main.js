import { combineReducers } from "redux";
import { cartReducer } from "./reducers";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  theme: themeReducer
});

export default rootReducer;
