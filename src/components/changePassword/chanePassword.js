import React, { Component } from "react";
import "./changePassword.css";
import { Input } from "antd";
import { Button } from "antd";

class ChanePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_password: "",
      new_password: "",
      confirm_password: "",
      loading: false
    };
    this.enterLoading = this.enterLoading.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const userpass = {
      current_password: this.state.current_password,
      new_password: this.state.new_password,
      confirm_password: this.state.confirm_password
    };
    console.log(userpass);
  }

  enterLoading() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="body">
        <div className="content1">
          <form onSubmit={this.handleSubmit}>
            <h3>Change Password</h3>
            <br />
            <hr className="hr1" />
            <Input.Password
              onChange={this.handleInputChange}
              value={this.state.current_password}
              placeholder="current password"
              className="currentpassword"
            />
            <br />
            <hr className="hr2" />
            <Input.Password
              onChange={this.handleInputChange}
              value={this.state.new_password}
              placeholder="new password"
              className="newpassword"
            />
            <Input.Password
              onChange={this.handleInputChange}
              value={this.state.confirm_password}
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
          </form>
        </div>
      </div>
    );
  }
}

export default ChanePassword;
