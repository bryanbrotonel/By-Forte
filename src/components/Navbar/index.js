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
import logo from "images/By Forte Primary (Black).png";
import "./styles.css";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      width: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
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
    console.log(this.state.width);
    console.log(this.state.length);
    const pages = ["home", "about", "lookbook", "shop", "cart"];
    const navLinks = pages.map(page => {
      return (
        <NavItem key={page}>
          <NavLink
            onClick={this.handleClick}
            to={"/" + page}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="NavLink text-uppercase mx-auto"
            tag={RRNavLink}
          >
            {page}
          </NavLink>
        </NavItem>
      );
    });

    return (
      <div className="container">
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
