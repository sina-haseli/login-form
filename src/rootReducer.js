import { combineReducers } from "redux";
import login from "./components/login/loginForm.reducer";
import landing from "./components/emailVerify/landing.reducer";
import forgotForm from "./components/reset/reset.reducer";

const reducers = combineReducers({
  login,
  landing,
  forgotForm
});

export default reducers;
