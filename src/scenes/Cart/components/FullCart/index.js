import React, { Component } from "react";
import PropTypes from "prop-types";

import whiteForte from "images/Mock Ups/By Forte - Mock Up (White).png";

import { CartHeader } from "../Cart Header";
import { CartItemRow } from "../Cart Item Row";
import { CartFooter } from "../Cart Footer";

import "./styles.css";

export class FullCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  render() {
    this.cart = this.props.getCart();
    const productItemsCart =
      this.cart.items !== "undefined" ? (
        this.props.cart.items.map(product => (
          <CartItemRow
            key={`${product.itemName} - ${product.itemVariation}: ${
              product.itemSize
            }`}
            itemImage={whiteForte}
            itemName={product.itemName}
            itemSize={product.itemSize}
            itemVariation={product.itemVariation}
            itemQuantity={product.itemQuantity}
            getCart={this.props.getCart}
            updateCart={this.props.updateCart}
            removeCart={this.props.removeCart}
          />
        ))
      ) : (
        <h3>Cart empty</h3>
      );

    return (
      <React.Fragment>
        <div className="p-2">
          <CartHeader key="Cart Header" />
          {productItemsCart}
        </div>
        <div className="mt-auto p-2 w-100">
          <CartFooter cart={this.cart}/>
        </div>
      </React.Fragment>
    );
  }
}

FullCart.propTypes = {
  cart: PropTypes.object,
  updateCart: PropTypes.func,
  getCart: PropTypes.func,
  removeCart: PropTypes.func
};
