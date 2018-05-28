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
      cart: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getCart = this.getCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    let currentCart = this.getCart();

    if (currentCart) {
      this.setState({
        cart: currentCart
      });
    } else {
      this.updateCart(this.state.cart);
    }
  }

  getCart() {
    let currentCart = this.cookies.get("My Cart");
    return currentCart;
  }

  removeCart() {
    this.cookies.remove("My Cart", { path: "/" });
  }

  updateCart(cartObject) {
    this.setState({
      cart: cartObject
    });

    this.cookies.set("My Cart", cartObject, { path: "/" });
  }

  render() {
    let cartContent = undefined;
    let cartItems = this.state.cart.items

    cartContent =
      cartItems !== undefined &&
      cartItems !== "undefined" &&
      cartItems.length !== 0 ? (
        (cartContent = (
          <FullCart
            cart={this.state.cart}
            getCart={this.getCart}
            updateCart={this.updateCart}
            removeCart={this.removeCart}
          />
        ))
      ) : (
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

    return (
      <div className="container d-flex align-items-start flex-column">
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
