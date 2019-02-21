import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import login from "./components/login/login.js";
import reset from "./components/reset/reset";
import landing from "./components/emailVerify/landing";
import header from "./components/header/header.js";
import mainpage from "./components/mainPage/mainPage";
import confirmreset from "./components/reset/confirmreset";
import editProfile from "./components/editprofile/editProfile";
import changePassword from "./components/changePassword/chanePassword";
import changePasswordSuccess from "./components/changePassword/changePasswordSuccess";
import login1 from "./components/login/login1";
import "./App.css";

class App extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    fetch(`${"API_URL"}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    const content = () => {
      if (this.state.loading) {
        return (
          <span className="loading">
            <i className="fa fa-refresh" />
          </span>
        );
      }
    };
    return (
      <Fragment>
        <Switch>
          <Route path="/login1" component={login1} />
          <Route path="/mainpage" component={mainpage} />
          <Route path="/editprofile" component={editProfile} />
          <Route exact path="/" component={login} />
          <Route path="/reset" component={reset} />
          <Route path="/email" component={landing} />
          <Route path="/header" component={header} />
          <Route path="/confirm" component={confirmreset} />
          <Route path="/changepassword" component={changePassword} />
          <Route
            path="/changepasswordsuccess"
            component={changePasswordSuccess}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
