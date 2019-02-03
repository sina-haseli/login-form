import React, { Component } from "react";
import logo_splash from "../../Images/logo_splash.svg";
//import "./confirmreset.css";

class confirmreset extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form className="box" method="post">
              <p className="reset-h2">Reset Password</p>
              <p className="reset-p">
                Thank you. A reset password link has been sent to [insert user’s
                email]. Please check your junk/spam folder.
              </p>
              <input
                type="submit"
                name="Button"
                placeholder="Submit"
                onClick={e => this.handleClick(e)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default confirmreset;
