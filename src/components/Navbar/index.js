import React from 'react';

import { MobileNavbar } from './Mobile Navbar';
import { DesktopNavbar } from './Desktop Navbar';

import logo from 'images/By Forte Secondary Logo (White).webp';
import './styles.css';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: ['Home', 'Shop', 'Editorial', 'About', 'Cart'],
    };
  }

  render() {
    const { pages } = this.state;

    return (
      <React.Fragment>
        <MobileNavbar logo={logo} pages={pages} />
        <DesktopNavbar logo={logo} pages={pages} />
      </React.Fragment>
    );
  }
}
