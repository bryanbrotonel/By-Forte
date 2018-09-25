import React from "react";

export class DesktopNavbar extends React.Component {
  render() {
    const { logo, navLinks } = this.props;

    return (
      <div className=" d-none d-md-block">
        <nav className="uk-navbar uk-margin" uk-navbar="true">
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
