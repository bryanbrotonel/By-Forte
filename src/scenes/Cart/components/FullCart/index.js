import React, { Component } from "react";
import PropTypes from "prop-types";

import { getCart } from "./../../../../helpers/cartCookieHelpers";

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
    const cart = getCart();
    const productItemsCart =
      cart.items !== "undefined" ? (
        cart.items.map(product => (
          <CartItemRow
            key={`${product.productName} - ${product.productVariation}: ${
              product.itemSize
            }`}
            productName={product.productName}
            productVariation={product.productVariation}
            itemImage="https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png"
            itemSize={product.itemSize}
            itemQuantity={product.itemQuantity}
            updateCart={this.props.updateCart}
          />
        ))
      ) : (
        <h3>Cart empty</h3>
      );

    return (
      <React.Fragment>
        <div className="p-2 w-100">
          <CartHeader key="Cart Header" />
          {productItemsCart}
        </div>
        <div className="mt-auto p-2 w-100">
          <CartFooter cart={cart} />
        </div>
      </React.Fragment>
    );
  }
}

FullCart.propTypes = {
  cart: PropTypes.object,
  updateCart: PropTypes.func,
};
