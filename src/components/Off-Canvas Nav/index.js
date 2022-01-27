import React from 'react';
import propTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as Menu } from 'react-burger-menu';

import './styles.css';

export class OffCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { pages } = this.props;
    const { menuOpen } = this.state;

    const navLinks = pages.map((page) => {

      return (
        <li key={page}>
          <NavLink
            to={'/' + page}
            style={({ isActive }) => ({ color: isActive ? 'white' : '' })}
            onClick={() => this.closeMenu()}
            className="navbar-link mx-auto"
          >
            {page}
          </NavLink>
        </li>
      );
    });

    return (
      <React.Fragment>
        <Menu
          isOpen={menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={false}
          pageWrapId={'body'}
          outerContainerId={'app'}
        >
          {navLinks}
        </Menu>
        <div className="uk-navbar-left">
          <FontAwesomeIcon
            className="ml-4"
            icon="bars"
            size="2x"
            onClick={() => this.toggleMenu()}
          />
        </div>
      </React.Fragment>
    );
  }
}
OffCanvas.propTypes = {
  pages: propTypes.array,
};
