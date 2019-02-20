import { combineReducers } from "redux";
import login from "./components/login/loginForm.reducer";
import landing from "./components/emailVerify/landing.reducer";
import forgotForm from "./components/reset/reset.reducer";
import changePassword from "./components/changePassword/changePassword.reducer";

const reducers = combineReducers({
  login,
  landing,
  forgotForm,
  changePassword
});

export default reducers;
