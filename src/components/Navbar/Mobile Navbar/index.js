import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OffCanvas } from "../../Off-Canvas Nav";

import "./styles.css";

export class MobileNavbar extends React.Component {
  render() {
    const { logo, navLinks } = this.props;

    return (
      <React.Fragment>
        <div className="d-block d-md-none">
          <nav className="uk-navbar text-white" uk-navbar="true">
            <div className="uk-navbar-left ml-3">
              <FontAwesomeIcon
                uk-toggle="target: #offcanvas-nav"
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
        <OffCanvas logo={logo} navLinks={navLinks} />
      </React.Fragment>
    );
  }
}
