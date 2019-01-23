import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import login from "./components/login/login.js";
import reset from "./components/reset/reset";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/reset" component={reset} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
