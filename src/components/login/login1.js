import React, { Component } from "react";
import Formsy from "formsy-react";
import { connect } from "react-redux";
import {
  authenticate,
  resetLoginState,
  setLoginEmail,
  setLoginPassword
} from "./loginForm.action";
import "./login.css";
import logo_splash from "../../Images/logo_splash.svg";
import MyInput from "./input";

//edit

class login1 extends Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  submit(data) {
    alert(JSON.stringify(data, null, 4));
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  state = {
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  render() {
    return (
      <Formsy
        onSubmit={this.submit}
        onValid={this.enableButton}
        onInvalid={this.disableButton}
        className="login"
      >
        <MyInput
          name="email"
          title="Email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <MyInput name="password" title="password" type="password" required />
        <button type="submit" disabled={!this.state.canSubmit}>
          Submit
        </button>
      </Formsy>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.state,
  error: state.login.error,
  password: state.login.password
});
export default connect(
  mapStateToProps,
  { authenticate, resetLoginState, setLoginEmail, setLoginPassword }
)(login1);
