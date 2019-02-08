import React, { Component } from "react";
import "./header.css";
import admin from "../../Images/user-circle-o.svg";
import logo from "../../Images/logo_splash.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="yop" className="logo" />

        <div className="header-right">
          <p>April 12,2019</p>
          <img src={admin} className="admin"/>
        </div>
      </div>
    );
  }
}

export default Header;
