import React from "react";

import firebase from "firebase/app";
import "firebase/auth";

import { MobileNavbar } from "./Mobile Navbar";
import { DesktopNavbar } from "./Desktop Navbar";

import logo from "images/By Forte Secondary Logo (White).png";
import "./styles.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: ["Home", "Editorial", "Shop", "About"]
    };

    this.validateShopper = this.validateShopper.bind(this);
  }

  componentDidMount() {
    this.validateShopper();
  }

  validateShopper() {
    const self = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.setState(prevState => ({
          pages: prevState.pages.concat(["cart"])
        }));
      } else {
        var navbarPages = self.state.pages;
        var index = navbarPages.indexOf("cart");
        if (index > -1) {
          navbarPages.splice(index, 1);
        }
        self.setState({
          pages: navbarPages
        });
      }
    });
  }

  render() {
    const {pages} = this.state;

    return (
      <React.Fragment>
        <MobileNavbar logo={logo} pages={pages} />
        <DesktopNavbar logo={logo} pages={pages} />
      </React.Fragment>
    );
  }
}
