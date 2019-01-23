import React, { Component } from "react";
import "./reset.css";
import logo_splash from "../../Images/logo_splash.svg";

class reset extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form className="box" method="post">
              <p className="reset-h2">Reset Password</p>
              <p className="reset-p">
                Enter the email address associated with your account, and we’ll
                email you a link to reset your password
              </p>
              <input
                //defaultValue={this.state.email}
                type="text"
                name="email"
                className="email"
                placeholder="Email Address"
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

export default reset;
