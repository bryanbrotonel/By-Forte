import React, { Component } from "react";
import moment from "moment";

import firebase from "firebase/app";
import { Redirect } from "react-router";

import { setCart, getCart } from "./../../helpers/cookieHelpers";

import { CheckoutItems } from "./components/Checkout Items";
import { CheckoutForm } from "./components/Checkout Form";
import { ThankYou } from "./components/Thank You";

import "./styles.css";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getCart(),
      orderPlaced: false
    };

    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.formatOrder = this.formatOrder.bind(this);
    this.fnfSale = this.fnfSale.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | Checkout";
<<<<<<< HEAD
    if (this.state.cart) {
      this.fnfSale(5);
    }
=======
    this.fnfSale(5);
>>>>>>> 1b7107af67ec5ce89ca3ec9f72f437827ce64207
  }

  handleCheckoutSubmit(formInfo) {
    let self = this;

    this.formatOrder(formInfo).then(function(order) {
      self.addOrderToDB(order);

      firebase
        .auth()
        .signOut()
        .then(function() {
          self.setState({
            orderPlaced: true
          });
        })
        .catch(function(error) {
          // An error happened.
          console.log(error.code, error.message);
        });
    });
  }

  getCurrentTimestamp() {
    const timeStamp = moment();
    const timeOffset = timeStamp.utcOffset();

    return [timeStamp.valueOf(), timeOffset];
  }

  formatOrder(formInfo) {
    let self = this;

    const currentTimeStamp = this.getCurrentTimestamp()[0];
    const currentTimeOffset = this.getCurrentTimestamp()[1];

    return new Promise(function(resolve, reject) {
      self.getOrderID().then(function(orderID) {
        var order = {
          cart: self.state.cart,
          customerInfo: formInfo,
          orderID: orderID,
          time: {
            timeStamp: currentTimeStamp,
            offset: currentTimeOffset
          }
        };
        return order ? resolve(order) : reject();
      });
    });
  }

  fnfSale(saleDeductPrice) {
    var { cart } = this.state;

    const saleDeduct = saleDeductPrice * 2 * Math.floor(cart.itemCount / 2);
    cart.total = cart.subtotal - saleDeduct;

    console.log(cart);

    setCart(cart);

    this.setState({
      cart: cart
    });
  }

  addOrderToDB(order) {
    const firebaseDB = firebase.database();

    var updates = {};
    updates[
      "orderList/" +
        firebaseDB.ref("orderList").push().key +
        "-" +
        order.orderID
    ] = order;

    firebaseDB.ref().update(updates);
  }

  getOrderID() {
    let self = this;

    return new Promise(function(resolve, reject) {
      firebase
        .database()
        .ref("orderList")
        .once("value")
        .then(function(snapshot) {
          var orderID = snapshot.numChildren();
          orderID = self.pad_with_zeroes(++orderID);
          return orderID ? resolve(orderID) : reject();
        });
    });
  }

  pad_with_zeroes(number, length = 4) {
    var my_string = "" + number;
    while (my_string.length < length) {
      my_string = "0" + my_string;
    }
    return my_string;
  }

  render() {
    const { cart, orderPlaced } = this.state;

    return !cart && !orderPlaced ? (
      <Redirect to="/shop" />
    ) : this.state.orderPlaced ? (
      <ThankYou />
    ) : (
      <div className="container">
        <div className="d-flex flex-md-row flex-column-reverse justify-content-md-between checkout-container">
          <div className="checkout-form-wrapper pb-3 pb-md-0">
            <CheckoutForm handleCheckoutSubmit={this.handleCheckoutSubmit} />
          </div>
          <div className="checkout-items-wrapper pb-3 pb-md-0">
            <CheckoutItems
              cart={cart}
              subtotal={cart.subtotal}
              total={cart.total}
            />
          </div>
        </div>
      </div>
    );
  }
}
