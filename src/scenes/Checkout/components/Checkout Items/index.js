import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { CheckoutItemRow } from "../Checkout Item Row";

import "./styles.css";

export class CheckoutItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cart, subtotal, total } = this.props;

    console.log('checkout Items', cart);

    const productItemsCart = cart.items ? (
      cart.items.map(product => (
        <CheckoutItemRow
          key={`${product.productName} - ${product.productVariation}: ${
            product.itemSize
          }`}
          itemImage="https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png"
          itemName={product.productName}
          itemSize={product.itemSize}
          itemVariation={product.productVariation}
          itemQuantity={product.itemQuantity}
        />
      ))
    ) : (
      <h1>Cart empty</h1>
    );

    return (
      <div className="uk-card uk-card-default uk-card-body">
        <div className="row justify-content-between align-text-bottom align-bottom">
          <h3 className="col-5 uk-card-title">{cart.itemCount} ITEMS</h3>
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
        <hr />
        <div className="text-right text-dark">
          <h6>SUBTOTAL: ${subtotal}</h6>
          <h3>TOTAL: ${total}</h3>
        </div>
      </div>
    );
  }
}

CheckoutItems.propTypes = {
  cart: PropTypes.object.isRequired,
  subtotal: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};
