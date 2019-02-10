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

//edit

class login extends Component {
  state = {
    email: "",
    password: ""
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
    this.props.setLoginEmail(e.target.value);
  };

  handleOnPasswordChange = e => {
    this.props.setLoginPassword(e.target.value);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form className="box" method="post" onSubmit={this.handleSubmit}>
              <ul>
                {this.props.error.messages.map((message, i) => (
                  <li key={i}>{message}</li>
                ))}
              </ul>
              <input
                defaultValue={this.state.email}
                type="text"
                name="email"
                className="email"
                placeholder="Username"
                onChange={this.handelOnEmailChange}
              />
              <input
                defaultValue={this.state.password}
                type="password"
                name="password"
                className="password"
                placeholder="Password"
                onChange={this.handleOnPasswordChange}
              />
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
