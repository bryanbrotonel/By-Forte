import React from "react";

import "./styles.css";

export class OffCanvas extends React.Component {
  render() {
    const { navLinks } = this.props;

    return (
      <div className="uk-offcanvas-content">
        <div id="offcanvas-nav" uk-offcanvas="push">
          <div className="uk-offcanvas-bar uk-flex uk-flex-column">
            <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-close">
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
