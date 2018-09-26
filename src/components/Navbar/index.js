import React from "react";
import { NavLink } from "react-router-dom";

import { MobileNavbar } from "./Mobile Navbar";
import { DesktopNavbar } from "./Desktop Navbar";

import firebase from "firebase/app";
import "firebase/auth";

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

    const navLinks = this.state.pages.map(page => {
      return (
        <li key={page}>
          <NavLink
            to={"/" + page}
            activeStyle={{
              color: "white",
              fontWeight: "bold"
            }}
            className="navbar-link mx-auto"
          >
            {page}
          </NavLink>
        </li>
      );
    });

    return (
      <React.Fragment>
        <MobileNavbar logo={logo} navLinks={navLinks}  />
        <DesktopNavbar logo={logo} navLinks={navLinks} />
      </React.Fragment>
    );
  }
}
