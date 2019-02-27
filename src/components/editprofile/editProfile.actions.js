import axios from "axios";
//import {updateStoreWithUser} from '../User.actions';

const SET_PROFILE_FIRSTNAME = "SET_PROFILE_FIRSTNAME";
const SET_PROFILE_LASTNAME = "SET_PROFILE_LASTNAME";
const SET_PROFILE_EMAIL = "SET_PROFILE_EMAIL";
const SET_PROFILE_PASSWORD = "SET_PROFILE_PASSWORD";
const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

const RESET_PROFILE_FIRSTNAME = "RESET_PROFILE_FIRSTNAME";
const RESET_PROFILE_LASTNAME = "RESET_PROFILE_LASTNAME";
const RESET_PROFILE_EMAIL = "RESET_PROFILE_EMAIL";
const RESET_PROFILE_PASSWORD = "RESET_PROFILE_PASSWORD";
const RESET_PROFILE_ERROR = "RESET_PROFILE_ERROR";

//action creators

export const setProfileFirstName = firstname => ({
  type: SET_PROFILE_FIRSTNAME,
  firstname
});

export const _resetProfileFirstName = firstname => ({
  type: RESET_PROFILE_FIRSTNAME,
  firstname
});

export const setProfileLastName = lastname => ({
  type: SET_PROFILE_LASTNAME,
  lastname
});

export const _resetProfileLastName = lastname => ({
  type: RESET_PROFILE_LASTNAME,
  lastname
});

export const setProfileEmail = email => ({
  type: SET_PROFILE_EMAIL,
  email
});

export const _resetProfileEmail = email => ({
  type: RESET_PROFILE_EMAIL,
  email
});

export const setProfilePassword = password => ({
  type: SET_PROFILE_PASSWORD,
  password
});

export const _resetProfilePassword = password => ({
  type: RESET_PROFILE_PASSWORD,
  password
});

export const setProfileError = error => ({
  type: SET_PROFILE_ERROR,
  error
});

export const _resetProfileError = error => ({
  type: SET_PROFILE_ERROR,
  error
});

//thunks

export const updateProfile = ({
  firstname,
  lastname,
  email,
  password
}) => dispatch =>
  axios
    .patch(`/api/user/${id}`, {
      firstname,
      lastname,
      email,
      password
    })
    .then(response => {
      dispatch(_resetProfileFirstName());
      dispatch(_resetProfileLastName());
      dispatch(_resetProfileEmail());
      dispatch(_resetProfilePassword());
      dispatch(_resetProfileError());
    })
    .catch(error => {
      console.log(error, "error");
    });
