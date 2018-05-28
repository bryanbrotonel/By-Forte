import React, { Component } from "react";

import Cookies from "universal-cookie";
import { Redirect } from "react-router";

import { getCart } from "./../../helpers/cartCookieHelpers";

import { CheckoutItems } from "./components/Checkout Items";
import { CheckoutForm } from "./components/Checkout Form";
import { ThankYou } from "./components/Thank You";

import "./styles.css";

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCart(),
      customerInfo: {},
      orderPlaced: false
    };

    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this);
  }

  handleCheckoutSubmit(formInfo) {
    console.log("handleCheckoutSubmit");
    console.log(formInfo);
    this.setState({
      customerInfo: formInfo,
      orderPlaced: true
    });
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    if (!getCart() && !this.state.orderPlaced) {
      console.log('redirect to shop');
      return <Redirect to="/shop" />;
    } else {
      if (this.state.orderPlaced) {
        console.log('thank you');
        return <ThankYou />;
      } else
        return (
          <div className="container">
            <div className="d-flex flex-md-row flex-column-reverse justify-content-md-between checkout-container">
              <div className="checkout-form-wrapper pb-3 pb-md-0">
                <CheckoutForm
                  handleCheckoutSubmit={this.handleCheckoutSubmit}
                />
              </div>
              <div className="checkout-items-wrapper pb-3 pb-md-0">
                <CheckoutItems />
              </div>
            </div>
          </div>
        );
    }
  }
}
