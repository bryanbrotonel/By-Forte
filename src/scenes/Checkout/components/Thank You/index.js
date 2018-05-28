import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class ThankYou extends Component {
  render() {
    return (
      <div className="container middle-align">
        <h1>Thank You</h1>
        <p className="text-muted">Your order is being processed</p>
        <NavLink to="/shop">
          <button className="uk-button uk-button-default border border-black">
            CONTINUE SHOPPING
          </button>
        </NavLink>
      </div>
    );
  }
}
