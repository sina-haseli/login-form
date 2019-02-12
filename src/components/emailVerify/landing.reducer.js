const SET_EMAIL_STATE = "SET_EMAIL_STATE";
const SET_EMAIL_ERROE = "SET_EMAIL_ERROE";
const RESET_EMAIL_STATE = "RESET_EMAIL_STATE";
const initialState = {
  sendingEmail: "",
  error: {
    fields: [],
    messages: []
  }
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RESET_EMAIL_STATE:
      return initialState;
    case SET_EMAIL_STATE:
      newState.sendingEmail = action.email;
      break;
    // case SET_EMAIL_ERROE:
    // TODO write sendingemail error to checkout in our DB we have this email or not ?
    //  and  then show the messages error
    //     break;

    default:
      return state;
  }
  return newState;
};
