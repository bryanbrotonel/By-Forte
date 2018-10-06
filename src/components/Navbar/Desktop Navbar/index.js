import React from "react";
import propTypes from "prop-types";

import { NavLink } from "react-router-dom";

export class DesktopNavbar extends React.Component {
  render() {
    const { logo, pages } = this.props;

    const navLinks = pages.map(page => {
      return (
        <li key={page}>
          <NavLink
            to={"/" + page}
            activeStyle={{ color: "white", fontWeight: "bold" }}
            className="navbar-link mx-auto"
          >
            {page}
          </NavLink>{" "}
        </li>
      );
    });

    return (
      <div className="d-none d-sm-block">
        <nav className="uk-navbar" uk-navbar="true">
          <div className="uk-navbar-left ml-4">
            <a href="/" className="uk-logo">
              {" "}
              <img className="navbar-logo" src={logo} alt="By Forte" />
            </a>
          </div>

          <div className="uk-navbar-right mr-4">
            <ul className="uk-navbar-nav text-uppercase">{navLinks}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

DesktopNavbar.propTypes = {
  logo: propTypes.string,
  pages: propTypes.array
};
