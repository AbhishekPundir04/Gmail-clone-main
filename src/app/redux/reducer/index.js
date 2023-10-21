import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";

export const reducers = combineReducers({
  // auth
  auth: authReducer,
});
