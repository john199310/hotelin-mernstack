import { combineReducers } from "redux";
import ProductReducer from "./reducer";
import AuthReducer from "./authReducer";

export default combineReducers({
  Hotels: ProductReducer,
  Auth: AuthReducer
});
