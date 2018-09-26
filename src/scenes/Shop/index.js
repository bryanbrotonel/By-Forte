import React, { Component } from "react";
import Loadable from "react-loadable";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Loading from "./../../components/Loading";
import { ProductShop } from "./components/Product Shop";

import "./styles.css";

const ComingSoon = Loadable({
  loader: () => import("../../components/ComingSoon"),
  loading: Loading
});

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validShopper: false,
      validPassword: true
    };

    this.signIn = this.signIn.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const self = this;

    document.title = "By Forte | Shop";

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
    const shopEmail = "shop@byforte.store";

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        return firebase
          .auth()
          .signInWithEmailAndPassword(shopEmail, value)
          .then(function() {
            self.setState({ validShopper: true });
          });
      })
      .catch(function() {
        self.setState({
          validPassword: false
        });
      });
  }

  render() {
    return (
      <ComingSoon
        bgImage="https://source.unsplash.com/7YwWjgS7aJs/1600x1024"
        text="Coming Soon"
      />
      // <div className="mt-5 container d-flex">
      //   <ProductShop />
      // </div>
    );
  }
}
