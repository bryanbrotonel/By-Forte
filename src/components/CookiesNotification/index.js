import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class CookiesNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookiesMessage:
        "We use cookies to store information on your computer. By continuing, you agree with our use of cookies.",
      confirmText: "OK"
    };
  }

  static propTypes = {
    handleConfirmCookies: PropTypes.func.isRequired
  };

  handleSelect = event => {
    event.preventDefault();
    this.props.handleConfirmCookies();
  };

  render() {
    const { cookiesMessage, confirmText } = this.state;

    return (
      <div className="cookies-prompt">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-9r">
              <h6>{cookiesMessage}</h6>
            </div>
            <div className="col-4 col-md-1 text-uppercase">
              <input
                type="button"
                className="cookies-prompt-button uk-button"
                value={confirmText}
                onClick={this.handleSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
