import React, { Component } from "react";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

import whiteForte from "./../../../../images/Mock Ups/By Forte - Mock Up (White).png";

import { CheckoutItemRow } from "../Checkout Item Row";

import "./styles.css";

export class CheckoutItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCart()
    };

    this.cart = this.state.cart;
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {

    const productItemsCart = this.cart ? (
      this.state.cart.map(product => (
        <CheckoutItemRow
          key={`${product.itemName} - ${product.itemVariation}: ${
            product.itemSize
          }`}
          itemImage={whiteForte}
          itemName={product.itemName}
          itemSize={product.itemSize}
          itemVariation={product.itemVariation}
          itemQuantity= {1}
        />
      ))
    ) : (
      <h1>Cart empty</h1>
    );

    return (
      <div className="uk-card uk-card-default uk-card-body">
        <div className="row justify-content-between align-text-bottom align-bottom">
          <h3 className="col-5 uk-card-title">{this.cart.length} ITEMS</h3>
          <Link
            className="col-5 text-right align-self-center text-muted"
            to="/cart"
          >
            {" "}
            <h6>EDIT</h6>
          </Link>
        </div>
        <hr />
        {productItemsCart}
        <hr/>
        <div className="text-right text-dark">
          <h6>SUBTOTAL: </h6>
          <h3>TOTAL: </h3>
        </div>
      </div>
    );
  }
}
