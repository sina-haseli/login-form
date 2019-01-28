import React, { Component } from "react";
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
const mapStateToProps = state => ({
  email: state.login.state,
  error: state.login.error,
  password: state.login.password
});
export default connect(
  mapStateToProps,
  { authenticate, resetLoginState, setLoginEmail, setLoginPassword }
)(login);
