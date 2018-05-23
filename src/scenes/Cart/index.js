import React, { Component } from "react";
import PropTypes from "prop-types";

import firebase from "firebase";
import Cookies from "universal-cookie";

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
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    const productItemsCart = this.state.cart ? (
      this.state.cart.map(product => (
        <CartRow
          key={`${product.itemName} - ${product.itemVariation}: ${
            product.itemSize
          }`}
          itemImage={whiteForte}
          itemName={product.itemName}
          itemSize={product.itemSize}
          itemVariation={product.itemVariation}
        />
      ))
    ) : (
      <h1>Cart empty</h1>
    );

    return (
      <div className="container">
        <h1>Cart</h1>
        <br />
        <div className="row text-muted">
          <div className="col-9 d-none d-md-block">
            <div className="row">
              <div className="col-12">
                <h6>ITEM</h6>
              </div>
            </div>
          </div>
          <div className="col-3 text-center d-none d-md-block">
            <div className="row">
              <div className="col ml-auto">
                <h6>QUANTITY</h6>
              </div>
              <div className="col">
                <h6>PRICE</h6>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {productItemsCart}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
