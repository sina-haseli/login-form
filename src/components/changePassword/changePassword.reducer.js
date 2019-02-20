const RESET_RESET_FORM = "RESET_RESET_FORM";
const SET_RESET_FORM_ERROR = "SET_RESET_FORM_ERROR";
const SET_RESET_FORM_CONFIRM_PASSWORD = "SET_RESET_FORM_CONFIRM_PASSWORD";
const SET_RESET_FORM_PASSWORD = "SET_RESET_FORM_PASSWORD";


const initialState={
    confirmPassword: '',
    current_password:'',
    new_password:''
};

export default (state=)