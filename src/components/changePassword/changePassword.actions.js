import axios from "axios";
//import {updateStoreWithUser} from '../User.actions';

const RESET_RESET_FROM = "RESET_RESET_FORM";
const SET_RESET_FROM_ERROR = "SET_RESET_FORM_ERROR";
const SET_RESET_FROM_CONFIRM_PASSWORD = "SET_RESET_FORM_CONFIRM_PASSWORD";
const SET_RESET_FORM_PASSWORD = "SET_RESET_FORM_PASSWORD";

const _resetResetForm = () => ({
  type: RESET_RESET_FROM
});
