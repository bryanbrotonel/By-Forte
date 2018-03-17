import React from 'react';
import logo from 'images/By Forte Primary (Black).png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
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
    const pages = ['about', 'lookbook', 'shop'];
    const navLinks = pages.map(page => {
      return (
        <NavItem key={page}>
          <NavLink to={'/' + page} activeClassName="text-dark" className="NavLink text-uppercase text-muted mx-auto" tag={RRNavLink}>{page}</NavLink>
        </NavItem>)
    });

    return (
      <div>
      <Navbar className="NavBar mx-auto" color="faded" light={true} expand="md">
        <NavbarBrand href="/">
          <img src={logo} width="60" height="40" alt="by forte"/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <NavLink to='/#' activeClassName="text-dark" className="NavLink text-uppercase text-muted mx-auto" tag={RRNavLink}>Home</NavLink>
            </NavItem>
            {navLinks}
          </Nav>
        </Collapse>
      </Navbar>
    </div>);
  }
}
