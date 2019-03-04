import React, { Component } from "react";
import Header from "../header/header";
import Sider from "../sider/sider";
import home from "../../Images/dash_home_bread_crumb.svg";
import { Button } from "antd";
import "./organisations.css";

class Organisations extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sider />
          <div className="content">
            <h1>Organisations</h1>
            <img src={home} />
            <h4>• Organisations</h4>
            <div className="adminClass">
              <h1 className="adminName" />
              <Button>Edit</Button>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Organisations;
