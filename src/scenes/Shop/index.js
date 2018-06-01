import React, { Component } from "react";
import { ProductShop } from "./components/Product Shop";
import { PasswordInput } from "./components/passwordInput";
import firebase from 'firebase/app';
import 'firebase/auth';

import "./styles.css";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validShopper: false
    };

    this.signIn = this.signIn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState({ validShopper: true });
      }
    });
  }

  // Get password callback function
  signIn(value) {
    // Validate
    const self = this;
    const email = "shop@byforte.store";

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function() {
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, value)
          .then(function() {
            self.setState({ validShopper: true });
          });
      });
  }

  render() {
    return this.state.validShopper ? (
      <div className="container d-flex">
        <br />
        <ProductShop />
      </div>
    ) : (
      <div className="container middle-align">
        <PasswordInput signIn={this.signIn} />
      </div>
    );
  }
}
