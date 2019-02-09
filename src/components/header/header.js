import React, { Component } from "react";
import "./header.css";
import admin from "../../Images/user-circle-o.svg";
import logo from "../../Images/logo_splash.svg";
import { EnhancerOptions as date } from "redux-devtools-extension";

class Header extends Component {
  constructor(props) {
    super(props);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let today = new Date();
    let date =
      monthNames[today.getMonth()] +
      " " +
      today.getDate() +
      "," +
      today.getFullYear();
    this.state = {
      date
    };
  }
  render() {
    return (
      <div className="header">
        <img src={logo} alt="yop" className="logo" />

        <div className="header-right">
          <p>{this.state.date}</p>
          <img src={admin} alt="he" className="admin" />
        </div>
      </div>
    );
  }
}

export default Header;
