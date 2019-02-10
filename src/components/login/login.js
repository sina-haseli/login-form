import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  authenticate,
  resetLoginState,
  setLoginEmail,
  setLoginPassword
} from "./loginForm.action";
import "./login.css";
import logo_splash from "../../Images/logo_splash.svg";
import { FormErrors } from "./formErrors";

//edit

class login extends Component {
  state = {
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  // handleValidation() {
  //   let fields = this.state.email;
  //   let errors = {};
  //   let formIsValid = true;
  //
  //   //Email
  //   if (!fields["email"]) {
  //     formIsValid = false;
  //     errors["email"] = "Cannot be empty";
  //   }
  //   if (typeof fields["email"] !== "undefined") {
  //     let lastAtPos = fields["email"].lastIndexOf("@");
  //     let lastDotPos = fields["email"].lastIndexOf(".");
  //     if (
  //       !(
  //         lastAtPos < lastDotPos &&
  //         lastAtPos > 0 &&
  //         fields["email"].indexOf("@@") === -1 &&
  //         lastDotPos > 2 &&
  //         fields["email"].length - lastDotPos > 2
  //       )
  //     ) {
  //       formIsValid = false;
  //       errors["email"] = "Email is not valid";
  //     }
  //   }
  //   this.setState({ errors: errors });
  //   return formIsValid;
  // }

  validateField(fieldName, value) {
    let fieldValidateErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    //validate
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidateErrors.email = emailValid ? "" : "is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidateErrors.password = passwordValid ? "" : "is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidateErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  handleClick(e) {
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.authenticate(this.props.email, this.props.password);
  };

  handelOnEmailChange = e => {
    this.props.setLoginEmail(e.target.value, () => {
      this.validateField(e.target.email, e.target.value);
    });
  };

  handleOnPasswordChange = e => {
    this.props.setLoginPassword(e.target.value, () => {
      this.validateField(e.target.password, e.target.value);
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form className="box" method="post" onSubmit={this.handleSubmit}>
              <FormErrors formErrors={this.state.formErrors} />
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.email
                )}`}
              >
                <input
                  defaultValue={this.state.email}
                  type="text"
                  name="email"
                  className="email"
                  placeholder="Username"
                  onChange={this.handelOnEmailChange}
                />
              </div>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.password
                )}`}
              >
                <input
                  defaultValue={this.state.password}
                  type="password"
                  name="password"
                  className="password"
                  placeholder="Password"
                  onChange={this.handleOnPasswordChange}
                />
              </div>
              <input
                type="submit"
                name="Button"
                onClick={e => this.handleClick(e)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

login.propTypes = {
  email: PropTypes.string,
  error: PropTypes.shape({
    fields: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired
  }).isRequired,
  password: PropTypes.string,
  // login action creators
  authenticate: PropTypes.func.isRequired,
  resetLoginState: PropTypes.func.isRequired,
  setLoginEmail: PropTypes.func.isRequired,
  setLoginPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: state.login.state,
  error: state.login.error,
  password: state.login.password
});
export default connect(
  mapStateToProps,
  { authenticate, resetLoginState, setLoginEmail, setLoginPassword }
)(login);
