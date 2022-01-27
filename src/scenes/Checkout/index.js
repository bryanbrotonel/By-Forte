import React, { Component } from 'react';

import { Navigate } from 'react-router';

import { getCart } from './../../helpers/cookieHelpers';
import { addOrderToDB, formatOrder } from './../../helpers/dbHelpers';

import { CheckoutItems } from './components/Checkout Items';
import { CheckoutForm } from './components/Checkout Form';
import { ThankYou } from './components/Thank You';

import './styles.css';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getCart(),
      orderPlaced: false,
    };

    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = 'By Forte | Checkout';
  }

  handleCheckoutSubmit(formInfo) {
    const self = this;

    const { cart } = this.state;

    formatOrder(formInfo, cart).then(function (order) {
      addOrderToDB(order);
      
      self.setState({
        orderPlaced: true,
      });
    });
  }

  render() {
    const { cart, orderPlaced } = this.state;

    return !cart && !orderPlaced ? (
      <Navigate to="/shop" />
    ) : this.state.orderPlaced ? (
      <ThankYou />
    ) : (
      <div className="container pt-5">
        <div className="alert alert-warning" role="alert">
          For demonstration purposes only. All orders will not be processed.
        </div>
        <div className="row">
          <div className="checkout-items-wrapper col-md-5 order-md-2">
            <CheckoutItems
              cart={cart}
              subtotal={cart.subtotal}
              total={cart.total}
            />
          </div>
          <div className="checkout-form-wrapper col-md-7 order-md-1">
            <CheckoutForm handleCheckoutSubmit={this.handleCheckoutSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
