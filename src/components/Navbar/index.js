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

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      pages: ["Home", "Editorial", "Shop", "About", "Cart"],
      width: 0
    };

    this.validateShopper = this.validateShopper.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentDidMount() {
  //   // this.validateShopper();
  //   this.updateWindowDimensions();
  //   window.addEventListener("resize", this.updateWindowDimensions);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }

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

  handleClick() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      this.state.width < 767
    ) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {

    const navLinks = this.state.pages.map(page => {
      return (
        <li key={page}>
          <NavLink
            to={"/" + page}
            activeStyle={{
              color: "white"
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
