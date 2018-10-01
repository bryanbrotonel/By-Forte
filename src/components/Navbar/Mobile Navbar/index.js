import React from "react";
import propTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OffCanvas } from "../../Off-Canvas Nav";

import "./styles.css";

export class MobileNavbar extends React.Component {
  render() {
    const { logo, navLinks } = this.props;

    return (
      <React.Fragment>
        <div className="d-block d-sm-none">
          <nav className="uk-navbar text-white" uk-navbar="true">
            <OffCanvas logo={logo} navLinks={navLinks} />
            <div className="uk-navbar-left ml-4">
              <FontAwesomeIcon
                icon="bars"
                size="2x"
              />
            </div>

            <div className="uk-navbar-center">
              <a className="uk-navbar-item uk-logo" href="/">
                <img className="navbar-logo" src={logo} alt="By Forte" />
              </a>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

MobileNavbar.propTypes = {
  logo: propTypes.obj,
  navLinks: propTypes.array
};
