import axios from "axios";

const SET_EMAIL_STATE = "SET_EMAIL_STATE";
const RESET_EMAIL_STATE = "RESET_EMAIL_STATE";
const SET_EMAIL_ERROR = "SET_EMAIL_ERROR";

export const setEmailState = sendingEmail => ({
  type: SET_EMAIL_STATE,
  sendingEmail
});

export const _setEmailError = error => ({
  type: SET_EMAIL_ERROR,
  error
});

export const resetEmailState = sendingEmail => ({
  type: RESET_EMAIL_STATE
});

export const verified = sendingEmail => dispatch =>
  axios
    .post("/api/email", { email })
    .then(() => {
      dispatch(resetEmailState());
    })
    .catch(err => {
      if (err.response.status === 400) {
        dispatch(_setEmailError(err.response.data.error));
      }
    });
