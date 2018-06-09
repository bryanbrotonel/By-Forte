import React, { Component } from "react";

import { Link } from "react-router-dom";

import { getCart } from "../../../../helpers/cookieHelpers";

import { CheckoutItemRow } from "../Checkout Item Row";

import "./styles.css";

export class CheckoutItems extends Component {
  constructor(props) {
    super(props);

    const cart = getCart();

    this.state = {
      cart: cart,
      subtotal: cart.subtotal,
      total: cart.total
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.fnfSale = this.fnfSale.bind(this);
  }

  componentDidMount() {
    this.fnfSale(5);
  }

  fnfSale(saleDeductPrice) {
    var { cart } = this.state;

    const saleDeduct = saleDeductPrice * 2 * Math.floor(cart.itemCount / 2);
    cart.total -= saleDeduct;

    this.setState({
      cart: cart,
      total: cart.total
    });
  }

  render() {
    const { cart, subtotal, total } = this.state;

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
