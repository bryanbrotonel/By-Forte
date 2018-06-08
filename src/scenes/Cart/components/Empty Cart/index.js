import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class EmptyCart extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <h5 className="text-muted">
          Your cart is empty,{" "}
          <NavLink to="/shop" className="text-dark">
            continue shopping
          </NavLink>
          .
        </h5>
      </React.Fragment>
    );
  }
}
