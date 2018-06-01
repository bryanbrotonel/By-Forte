import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

import firebase from "firebase/app";
import 'firebase/auth';

import logo from "images/By Forte Primary (Black).png";
import "./styles.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      pages: ["home", "about", "lookbook", "shop"],
      width: 0
    };

    this.validateShopper = this.validateShopper.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.validateShopper();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
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
        <NavItem key={page}>
          <NavLink
            onClick={this.handleClick}
            to={"/" + page}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="nav-link text-uppercase mx-auto"
            tag={RRNavLink}
          >
            {page}
          </NavLink>
        </NavItem>
      );
    });

    return (
      <div className="container p-0">
        <Navbar light={true} expand="md">
          <NavbarBrand to="/" className="navbar-brand mr-auto" tag={RRNavLink}>
            <img id="logo" src={logo} alt="By Forte" />
          </NavbarBrand>
          <NavbarToggler onClick={this.handleClick} />
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              {navLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
