import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class CookiesNotification extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cookiesMessage: "This website uses cookies, do you happily accept?",
      confirmText: "YES",
      refuteText: "NO"
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    event.preventDefault();
    this.props.handleConfirmCookies(event.target.value.toLowerCase());
  }

  render() {
    const { cookiesMessage, confirmText, refuteText } = this.state;

    return (
      <div className="cookie-prompt">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-2">
              <h6>{cookiesMessage}</h6>
            </div>
            <div className="col-4 col-md-1">
              <input
                type="button"
                className="uk-button cookies-prompt-button"
                value={confirmText.toUpperCase()}
                onClick={this.handleSelect}
              />
            </div>
            <div className="col-4 col-md-1">
              <input
                type="button"
                className="uk-button cookies-prompt-button"
                value={refuteText.toUpperCase()}
                onClick={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CookiesNotification.proptypes = {
  handleConfirmCookies: PropTypes.func.isRequired
};
