import React from 'react';
import logo from 'images/By Forte Primary (Black).png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
import './navbar.scss';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="NavBar mx-auto" color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} width="60" height="40" alt="by forte"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className ="NavLink" href="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className ="NavLink" href="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className ="NavLink" href="/lookbook">LOOKBOOK</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className ="NavLink" href="/shop">SHOP</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
