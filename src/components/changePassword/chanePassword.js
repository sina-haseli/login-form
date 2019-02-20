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
          <Input.Password
            placeholder="current password"
            className="currentpassword"
          />
          <br />
          <hr className="hr2" />
          <Input.Password placeholder="new password" className="newpassword" />
          <Input.Password
            placeholder="confirm password"
            className="confirmpassword"
          />
          <Button
            type="primary"
            loading={this.state.loading}
            onClick={this.enterLoading}
            className="confirmpass"
          >
            Confirm
          </Button>
          <Button type="primary" className="cancelpass">
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default ChanePassword;
