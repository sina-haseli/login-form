import React, { Component } from "react";
import "./changePassword.css";
import { connect } from "react-redux";
import { Input } from "antd";
import { Button } from "antd";
import { message } from "antd";
import {
  changeResetFormPassword,
  setResetFormConfirmPassword,
  setResetFormCurrentPassword,
  setResetFormPassword,
  verifyToken
} from "./changePassword.actions";

const error = () => {
  message.error("Password must match !");
};

class ChanePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.enterLoading = this.enterLoading.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCurrentPasswordChange = this.handleCurrentPasswordChange.bind(
      this
    );
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.check = this.check.bind(this);
  }
  check() {
    if (this.props.password !== this.props.confirmPassword) {
      return message.error("Password must match !");
    }
  }

  handlePasswordChange(e) {
    this.props.setResetFormPassword(e.target.value);
  }
  handleConfirmPasswordChange(e) {
    this.props.setResetFormConfirmPassword(e.target.value);
  }
  handleCurrentPasswordChange(e) {
    this.props.setResetFormCurrentPassword(e.target.value);
  }

  // handleInputChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.changeResetFormPassword(this.props.password);
  };

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
              onChange={this.handleCurrentPasswordChange}
              name="current_password"
              value={this.props.currentPassword}
              placeholder="current password"
              className="currentpassword"
            />
            <br />
            <hr className="hr2" />
            <Input.Password
              name="new_password"
              onChange={this.handlePasswordChange}
              value={this.props.password}
              placeholder="new password"
              className="newpassword"
            />
            <Input.Password
              name="confirm_password"
              onChange={this.handleConfirmPasswordChange}
              value={this.props.confirmPassword}
              placeholder="confirm password"
              className="confirmpassword"
              onBlur={this.check}
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
const mapStateToProps = state => ({
  password: state.changePassword.password,
  confirmPassword: state.changePassword.confirmPassword,
  currentPassword: state.changePassword.currentPassword
});
export default connect(
  mapStateToProps,
  {
    changeResetFormPassword,
    setResetFormConfirmPassword,
    setResetFormCurrentPassword,
    setResetFormPassword,
    verifyToken
  }
)(ChanePassword);
