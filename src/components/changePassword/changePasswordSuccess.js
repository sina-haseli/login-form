import React, { Component } from "react";
import "./changePasswordSuccess.css";
import { Button } from "antd";

class ChangePasswordSuccess extends Component {
  render() {
    return (
      <div className="body">
        <div className="content1">
          <form onSubmit={this.handleSubmit}>
            <h3>Password Change Successfully</h3>
            <br />
            <hr className="hr1" />
            <span className="icon">
              <i className="fas fa-check-circle" />
            </span>
            <br />
            <p className="successText">
              A conformation email has been sent to name@gmail.com
            </p>
            <Button type="primary" className="confirmpass">
              Ok
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChangePasswordSuccess;
