import axios from "axios";
//import {updateStoreWithUser} from '../User.actions';

const SET_PROFILE_FIRSTNAME = "SET_PROFILE_FIRSTNAME";
const SET_PROFILE_LASTNAME = "SET_PROFILE_LASTNAME";
const SET_PROFILE_EMAIL = "SET_PROFILE_EMAIL";
const SET_PROFILE_PASSWORD = "SET_PROFILE_PASSWORD";
const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";

//action creators

export const setProfileFirstName = firstname => ({
  type: SET_PROFILE_FIRSTNAME,
  firstname
});

export const setProfileLastName = lastname => ({
  type: SET_PROFILE_LASTNAME,
  lastname
});

export const setProfileEmail = email => ({
  type: SET_PROFILE_FIRSTNAME,
  email
});

export const setProfilePassword = password => ({
  type: SET_PROFILE_FIRSTNAME,
  password
});

export const setProfileError = error => ({
  type: SET_PROFILE_FIRSTNAME,
  error
});
