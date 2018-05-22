import React, { Component } from "react";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

import whiteForte from "images/Mock Ups/By Forte - Mock Up (White).png";
import yellowForte from "images/Mock Ups/By Forte - Mock Up (Yellow).png";
// import ashMantraFront from "images/Mock Ups/Mantra Forte (Front) - Mock Up (Ash).png";
import ashMantraBack from "images/Mock Ups/Mantra Forte (Back) - Mock Up (Ash).png";
// import ncBlueMantraFront from "./../../images/Mock Ups/Mantra Forte (Front) - Mock Up (NC Blue).png";
import ncBlueMantraBack from "images/Mock Ups/Mantra Forte (Back) - Mock Up (NC Blue).png";

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
    const productItemsCart = this.state.cart ? (
      this.state.cart.map(product => (
        <div
          key={`${product.itemName} - ${product.itemVariation}: ${
            product.itemSize
          }`}
        >
          <p>
            {product.itemName} - {product.itemVariation}: {product.itemSize} x{" "}
            {product.itemQuantity}
          </p>
        </div>
      ))
    ) : (
      <p>Cart empty</p>
    );

    return (
      <div className="container">
        <h1>Cart</h1>
        {productItemsCart}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
