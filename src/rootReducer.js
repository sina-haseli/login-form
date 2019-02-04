import { combineReducers } from "redux";
import login from "./components/login/loginForm.reducer";
import landing from "./components/emailVerify/landing.reducer";

const reducers = combineReducers({
  login,
  landing
});

export default reducers;
