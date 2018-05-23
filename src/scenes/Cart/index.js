import React, { Component } from "react";
import PropTypes from "prop-types";

import firebase from "firebase";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

import { CartHeader } from "./components/Cart Header";
import { CartRow } from "./components/Cart Row";

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
    console.log(this.state.cart);
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    const cartContent = [];

    if (this.state.cart) {
      cartContent.push(<CartHeader key="Cart Header" />);
      cartContent.push(
        this.state.cart.map(product => (
          <CartRow
            key={`${product.itemName} - ${product.itemVariation}: ${
              product.itemSize
            }`}
            itemImage={whiteForte}
            itemName={product.itemName}
            itemSize={product.itemSize}
            itemVariation={product.itemVariation}
            itemQuantity={product.itemQuantity}
          />
        ))
      );
    } else {
      cartContent.push(
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
      <div className="container">
        <h1>CART</h1>
        {cartContent}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
