import { combineReducers } from "redux";
import login from "./components/login/loginForm.reducer";
import landing from "./components/emailVerify/landing.reducer";
import forgotForm from "./components/reset/reset.reducer";
import changePassword from "./components/changePassword/changePassword.reducer";
import editProfile from "./components/editprofile/editProfile.reducer";

const reducers = combineReducers({
  login,
  landing,
  forgotForm,
  changePassword,
  editProfile
});

export default reducers;
