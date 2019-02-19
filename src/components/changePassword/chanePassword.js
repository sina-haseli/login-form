import React, { Component } from "react";
import "./changePassword.css";
import { Input } from "antd";
import { Button } from "antd";

class ChanePassword extends Component {
  constructor(props) {
    super(props);
    this.enterLoading = this.enterLoading.bind(this);
  }
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
          <hr className="hr1" />
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
          <Button type="primary">Cancel</Button>
        </div>
      </div>
    );
  }
}

export default ChanePassword;
