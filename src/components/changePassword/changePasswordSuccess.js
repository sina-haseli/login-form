import React, { Component } from "react";
import "./changePasswordSuccess.css";
import { Button } from "antd";
import Icon from "antd/es/icon";

class ChangePasswordSuccess extends Component {
  render() {
    return (
      <div className="body">
        <div className="content1">
          <form onSubmit={this.handleSubmit}>
            <h3>Password Change Successfully</h3>
            <br />
            <hr className="hr1" />
            <Icon type="check-circle" theme="filled" className="icon" />
            <br />
            <p>A conformation email has been sent to name@gmail.com</p>
            <Button type="primary" className="confirmpass">
              Confirm
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChangePasswordSuccess;
