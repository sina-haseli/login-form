import React, { Component } from "react";
import { notify } from "react-notify-toast";
import Spinner from "./Spinner";
import "./landing.css";
import logo_splash from "../../Images/logo_splash.svg";
//import { API_URL } from "../config";

export default class Landing extends Component {
  // A bit of state to give the user feedback while their email address is being
  // added to the User model on the server.
  state = {
    sendingEmail: false
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ sendingEmail: true });

    // Super interesting to me that you can mess with the upper and lower case
    // of the headers on the fetch call and the world does not explode.
    fetch(`${"asd"}/email`, {
      method: "pOSt",
      headers: {
        aCcePt: "aPpliCaTIon/JsOn",
        "cOntENt-type": "applicAtion/JSoN"
      },
      body: JSON.stringify({ email: this.email.value })
    })
      .then(res => res.json())
      .then(data => {
        // Everything has come back successfully, time to update the state to
        // reenable the button and stop the <Spinner>. Also, show a toast with a
        // message from the server to give the user feedback and reset the form
        // so the user can start over if she chooses.
        this.setState({ sendingEmail: false });
        notify.show(data.msg);
        this.form.reset();
      })
      .catch(err => console.log(err));
  };

  render() {
    // This bit of state provides user feedback in the component when something
    // changes. sendingEmail is flipped just before the fetch request is sent in
    // onSubmit and then flipped back when data has been received from the server.
    // How many times is the 'sendingEmail' variable used below?
    const { sendingEmail } = this.state;

    return (
      // A ref is put on the form so that it can be reset once the submission
      // process is complete.
      <div className="App">
        <div className="container">
          <div className="top-bar">
            <img src={logo_splash} alt="yop" />
            <form
              className="box"
              onSubmit={this.onSubmit}
              ref={form => (this.form = form)}
            >
              <p className="reset-h2">Email Verify</p>
              <p className="reset-p">
                Enter the email address associated with your account, and we’ll
                email you a link to verify your Email
              </p>
              <div>
                <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  ref={input => (this.email = input)}
                  required
                />
                {/*
            Putting the label after the input allows for that neat transition
            effect on the label when the input is focused.
          */}
              </div>
              <div>
                {/*
            While the email is being sent from the server, provide feedback that
            something is happening by disabling the button and showing a
            <Spinner /> inside the button with a smaller 'size' prop passed in.
          */}
                <button type="submit" name="Button" disabled={sendingEmail}>
                  {sendingEmail ? (
                    <Spinner size="lg" spinning="spinning" />
                  ) : (
                    "Let's Go!"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
