import React from "react";
import propTypes from "prop-types";


import { OffCanvas } from "../../Off-Canvas Nav";

import "./styles.css";

export class MobileNavbar extends React.Component {
  render() {
    const { logo, pages } = this.props;

    return (
      <React.Fragment>
        <div className="d-block d-sm-none">
          <nav className="uk-navbar text-white" uk-navbar="true">
            <OffCanvas logo={logo} pages={pages} />
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
  logo: propTypes.string,
  pages: propTypes.array
};
