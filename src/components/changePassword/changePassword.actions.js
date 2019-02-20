import axios from "axios";
//import {updateStoreWithUser} from '../User.actions';

const RESET_RESET_FROM = "RESET_RESET_FORM";
const SET_RESET_FROM_ERROR = "SET_RESET_FORM_ERROR";
const SET_RESET_FROM_CONFIRM_PASSWORD = "SET_RESET_FORM_CONFIRM_PASSWORD";
const SET_RESET_FORM_PASSWORD = "SET_RESET_FORM_PASSWORD";
const SET_RESET_FORM_CURRENT_PASSWORD = "SET_RESET_FORM_CURRENT_PASSWORD";

const _resetResetForm = () => ({
  type: RESET_RESET_FROM
});

const _setResetFormError = error => ({
  type: SET_RESET_FROM_ERROR,
  error
});

export const setResetFormCurrentPassword = currentPassword => ({
  type: SET_RESET_FORM_CURRENT_PASSWORD,
  currentPassword
});

export const setResetFormConfirmPassword = confirmPassword => ({
  type: SET_RESET_FROM_CONFIRM_PASSWORD,
  confirmPassword
});

export const setResetFormPassword = password => ({
  type: SET_RESET_FORM_PASSWORD,
  password
});

export const changeResetFormPassword = (password, token) => dispatch =>
  axios
    .post(`/api/reset/${token}`, { password })
    .then(() => {
      dispatch(_resetResetForm());
    })
    .catch(err => {
      dispatch(_setResetFormError(err.response.data.error));
    });
export const verifyToken = token => dispatch =>
  axios.get(`api/reset/${token}`).catch(err => {
    if (err.response.status === 400) {
      dispatch(_setResetFormError(err.response.data.error));
    }
  });
