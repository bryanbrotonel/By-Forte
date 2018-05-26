import React, { Component } from "react";
import PropTypes from "prop-types";

// import firebase from "firebase";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

import { FullCart } from "./components/FullCart";

import "./styles.css";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCart()
    };
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    let cartContent = undefined;

    if (this.state.cart) {
      cartContent = <FullCart cart={this.state.cart} />;
    } else {
      cartContent = (
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

    return (
      <div className="container d-flex align-items-start flex-column">
        <h1>Cart</h1>
        {cartContent}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
