import React, { Component } from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";

import Cookies from "universal-cookie";

import { getCart, setCart } from "./../../helpers/cookieHelpers";

import Loading from "./../../components/Loading";

import "./styles.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      validShopper: false
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

    setCart(cartObject)
  }

  render() {
    const { cart } = this.state;
    const self = this;
    // if (cart != null) {
    //   return <Redirect to="/shop" />;
    // }

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
        <h1>Cart</h1>
        <CartContent />
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
