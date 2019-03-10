import React, { Component } from "react";
import "./header.css";
import "antd/dist/antd.css";
import admin from "../../Images/user-circle-o.svg";
import logo from "../../Images/logo_splash.svg";
import logout from "../../Images/icon_logout.svg";
import { Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="../editprofile/editProfile.jsx">Edit Profile</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">Logout</a>
      <img src={logout} />
    </Menu.Item>
  </Menu>
);

//initial commit

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
      <div className="header col-12">
        <img src={logo} alt="yop" className="logo" />

        <div className="header-right">
          <p>{this.state.date}</p>
          <img src={admin} alt="he" className="admin" />
          <Dropdown overlay={menu} trigger={["click"]} className="dropdown">
            <a className="ant-dropdown-link" href="#">
              Admin
              <br />
              Sina Haseli <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
