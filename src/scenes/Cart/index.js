import React, { Component } from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

import { getCart, setCart } from "./../../helpers/cookieHelpers";

import Loading from "./../../components/Loading";

import "./styles.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    const { cart } = this.state;
    let currentCart = getCart();

    document.title = "By Forte | Cart";

    if (currentCart) {
      this.setState({
        cart: currentCart
      });
    } else {
      this.updateCart(cart);
    }
  }

  updateCart(cartObject) {
    this.setState({
      cart: cartObject
    });

    setCart(cartObject);
  }

  render() {
    const { cart } = this.state;
    const self = this;

    let cartItems = cart.items;

    const CartContent =
      cartItems !== undefined &&
      cartItems !== "undefined" &&
      cartItems.length !== 0
        ? Loadable({
            loader: () => import("./components/Full Cart"),
            render(loaded) {
              let Component = loaded.default;
              return (
                <Component
                  cart={cart}
                  getCart={getCart}
                  updateCart={self.updateCart}
                />
              );
            },
            loading: Loading
          })
        : Loadable({
            loader: () => import("./components/Empty Cart"),
            loading: Loading
          });

    return (
      <div className="container d-flex align-items-start flex-column mt-5">
        <div className="row justify-content-between w-100">
          <div className="col-6 v-center">
            <h1 className="mb-0">Cart</h1>
          </div>
          <div className="col-6 p-0 v-center text-right">
            <Link to="/shop">
              <h6 className="text-muted mb-0">Continue shopping</h6>
            </Link>
          </div>
        </div>
        <CartContent />
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
