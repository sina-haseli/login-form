import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import login from "./components/login/login.js";
import reset from "./components/reset/reset";
import landing from "./components/emailVerify/landing";
import Spinner from "./components/emailVerify/Spinner";
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
        return <Spinner size="8x" spinning="spinning" />;
      }
    };
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/reset" component={reset} />
          <Route path="/email" component={landing} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
