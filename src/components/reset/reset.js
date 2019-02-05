import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  requestToken,
  resetForgotForm,
  setForgotFormEmail
} from "./reset.action";
import "./reset.css";
import logo_splash from "../../Images/logo_splash.svg";

class reset extends Component {
  componentWillUnMount() {
    this.props.resetForgotForm();
  }
  handleEmailChange = e => {
    this.props.setForgotFormEmail(e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.requestToken(this.props.email);
  };
  generateForm() {
    return (
      <form className="box" method="post" onSubmit={this.handleSubmit}>
        <p className="reset-h2">Reset Password</p>
        <p className="reset-p">
          Enter the email address associated with your account, and we’ll email
          you a link to reset your password
        </p>
        <input
          //defaultValue={this.state.email}
          type="text"
          name="email"
          className="email"
          placeholder="Email Address"
          onChange={this.handleEmailChange}
        />
        <input
          type="submit"
          name="Button"
          //onClick={e => this.handleClick(e)}
        />
      </form>
    );
  }
  generateSuccessMessage() {
    return <Link to={"/confirm"} />;
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            {this.props.emailsent
              ? this.generateSuccessMessage()
              : this.generateForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  email: state.forgotForm.email,
  emailsent: state.forgotForm.emailsent
});
export default connect(
  mapStateToProps,
  { requestToken, resetForgotForm, setForgotFormEmail }
)(reset);
