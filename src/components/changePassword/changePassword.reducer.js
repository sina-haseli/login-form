const RESET_RESET_FORM = "RESET_RESET_FORM";
const SET_RESET_FORM_ERROR = "SET_RESET_FORM_ERROR";
const SET_RESET_FORM_CONFIRM_PASSWORD = "SET_RESET_FORM_CONFIRM_PASSWORD";
const SET_RESET_FORM_PASSWORD = "SET_RESET_FORM_PASSWORD";
const SET_RESET_FORM_CURRENT_PASSWORD = "SET_RESET_FORM_CURRENT_PASSWORD";

const initialState = {
  confirm_password: "",
  current_password: "",
  new_password: ""
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RESET_RESET_FORM:
      return initialState;
    case SET_RESET_FORM_ERROR:
      const actionErrors = action.error.errors;
      const actionMessage = action.error.message;
      newState.error = Object.assign({}, initialState.error);

      const newFields = [];
      const newMessages = [];
      if (actionErrors) {
        for (let key in actionErrors) {
          newFields.push(actionErrors[key].name);
          newMessages.push(actionErrors[key].message);
        }
        newState.error.fields = [newFields];
        newState.error.messages = [...newMessages];
      } else {
        newState.error.messages = [actionMessage];
      }
      break;
    case SET_RESET_FORM_CONFIRM_PASSWORD:
      newState.confirm_password = action.confirmPassword;
      break;
    case SET_RESET_FORM_PASSWORD:
      newState.new_password = action.password;
      break;
    case SET_RESET_FORM_CURRENT_PASSWORD:
      newState.current_password = action.currentPassword;
      break;
    default:
      return state;
  }
  return newState;
};
