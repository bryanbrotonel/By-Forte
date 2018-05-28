import React, { Component } from "react";

import Cookies from "universal-cookie";

import { CheckoutItems } from "./components/Checkout Items";
import { CheckoutForm } from "./components/Checkout Form";

import "./styles.css";

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCart(),
      customerInfo: {}
    };

    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this)
  }

  handleCheckoutSubmit(formInfo) {
    console.log('handleCheckoutSubmit');
    console.log(formInfo);
    this.setState({
      customerInfo: formInfo
    })
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="d-flex flex-md-row flex-column-reverse justify-content-md-between checkout-container">
          <div className="checkout-form-wrapper pb-3 pb-md-0">
            <CheckoutForm handleCheckoutSubmit={this.handleCheckoutSubmit}/>
          </div>
          <div className="checkout-items-wrapper pb-3 pb-md-0">
            <CheckoutItems />
          </div>
        </div>
      </div>
    );
  }
}
