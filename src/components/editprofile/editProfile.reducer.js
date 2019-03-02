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

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  error: {
    field: [],
    messages: []
  }
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
  }
};
