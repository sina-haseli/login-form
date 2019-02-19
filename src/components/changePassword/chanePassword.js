import React, { Component } from "react";
import "./changePassword.css";
import { Input } from "antd";
import { Button } from "antd";

class ChanePassword extends Component {
  state = {
    loading: false
  };

  enterLoading() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="body">
        <div className="content1">
          <h3>Change Password</h3>
          <br />
          <hr />
          <Input.Password placeholder="input password" />
          <br />
          <hr />
          <Input.Password placeholder="input password" />
          <Input.Password placeholder="input password" />
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
          >
            Confirm
          </Button>
          <Button type="primary">Primary</Button>
        </div>
      </div>
    );
  }
}

export default ChanePassword;
