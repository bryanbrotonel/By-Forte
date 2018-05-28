import React, { Component } from "react";

import "./styles.css";

export class CheckoutFAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="text-justify">
          <h5>FAQ</h5>
          <strong>How do I pay?</strong>
          <p>
            We don't have online payments set up on the webstore yet. Therefore,
            payment will be done through e-transfers and cash.
          </p>
          <strong>Who do I pay?</strong>
          <p>
            All payments should be directed to either Trisha or Bryan. If you
            don't know who either Bryan or Trisha are, you shouldn't be here.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
