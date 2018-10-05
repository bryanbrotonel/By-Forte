import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { CheckoutItemRow } from "../Checkout Item Row";

import "./styles.css";

export class CheckoutItems extends Component {
  render() {
    const { cart, subtotal, total } = this.props;

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
          <h1 className="col-5 uk-card-title font-weight-bold">
            {cart.itemCount} Items
          </h1>
          <Link
            className="col-5 text-right align-self-center text-muted"
            to="/cart"
          >
            {" "}
            <h6>Edit</h6>
          </Link>
        </div>
        <hr />
        {productItemsCart}
        <hr />
        <div className="container text-dark">
          <div className="row justify-content-between">
            <div className="col-2 ">
              <h6>Subtotal</h6>
            </div>
            <div className="col-2 text-right pr-0">
              <h6>
                &#36;
                {subtotal}
              </h6>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-2 ">
              <h6>Total</h6>
            </div>
            <div className="col-2 text-right pr-0">
              <h6>
                &#36;
                {total}
              </h6>
            </div>
          </div>
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
