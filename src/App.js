import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import logo_splash from "./Images/logo_splash.svg";

class App extends Component {
  state = {
    email: "",
    password: ""
  };
  handleClick(e) {
    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("https://deomi.liara.run/v1/users/login", payload)
      .then(response => {
        console.log(">>>>>", response);
        if (response.data.code === 200) {
          console.log(">>>>> login successful");
        } else if (response.data.code === 204) {
          console.log("username pass do not match");
        } else {
          console.log("user does not exists");
        }
      })
      .catch(err => {
        console.log(err, "error");
      });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form className="box" method="post">
              <input
                defaultValue={this.state.email}
                type="text"
                name="email"
                className="email"
                placeholder="Username"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
              <input
                defaultValue={this.state.password}
                type="password"
                name="password"
                className="password"
                placeholder="Password"
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
              <input
                type="submit"
                name="Button"
                onClick={e => this.handleClick(e)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
