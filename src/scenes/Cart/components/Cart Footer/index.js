import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import "./styles.css";

export class CartFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <hr />
        <div className="w-100">
          <div className="row pb-md-3 pb-3 justify-content-end">
            <div className="pr-3 pl-3 text-center border border-dark">
              <h5>TOTAL</h5>
            </div>
            <div className="pr-3 pl-3 text-center h-100 border border-dark">
              <h5>{this.props.cart.total}</h5>
            </div>
          </div>
          <div className="row justify-content-end">
            <NavLink to="/checkout">
              <button className="uk-button uk-button-default">
                <h5>CHECKOUT</h5>
              </button>
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CartFooter.propTypes = {
  cart: PropTypes.object
};
