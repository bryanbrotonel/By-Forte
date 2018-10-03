import React, { Component } from "react";

import "./styles.css";

export class CheckoutFAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="text-justify text-dark">
          <h5><strong>FAQ</strong></h5>
          <strong>How do I pay?</strong>
          <p>
            We don&#39;t have online payments set up on the online shop yet.
            Payments will be done through e-transfers and cash.
          </p>
          <strong>Who do I pay?</strong>
          <p>
            All payments should be directed to either Trisha or Bryan. If you
            don&#39;t know who either Bryan or Trisha are, please contact <a href="mailto:supplybyforte@gmail.com">supplybyforte@gmail.com</a>.
          </p>
          <strong> When will I receive my order?</strong>
          <p>
            We will begin processing orders on the day of the deadline and once
            all orders have been taken. Processing time for orders will take around
            two weeks.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
