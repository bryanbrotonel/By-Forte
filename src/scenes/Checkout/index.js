import React, { Component } from "react";

import firebase from "firebase";
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
      cart: getCart(),
      orderPlaced: false
    };
    this.handleCheckoutSubmit = this.handleCheckoutSubmit.bind(this);
    this.formatOrder = this.formatOrder.bind(this);
  }

  handleCheckoutSubmit(formInfo) {
    let thisRef = this;

    this.formatOrder(formInfo).then(function(order) {
      thisRef.addOrderToDB(order);

      thisRef.setState({
        orderPlaced: true
      });
    });
  }

  formatOrder(formInfo) {
    let thisRef = this;

    return new Promise(function(resolve, reject) {
      thisRef.getOrderID().then(function(orderID) {
        const timeStamp = thisRef.getOrderTimeStamp()
        var order = {
          cart: thisRef.state.cart,
          customerInfo: formInfo,
          orderID: orderID,
          date: timeStamp[0],
          time: timeStamp[1]
        };
        return order ? resolve(order) : reject();
      });
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

  getOrderTimeStamp() {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return [
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear(),
      strTime
    ];
  }

  getOrderID() {
    let thisRef = this;

    return new Promise(function(resolve, reject) {
      firebase
        .database()
        .ref("orderList")
        .once("value")
        .then(function(snapshot) {
          var orderID = snapshot.numChildren();
          orderID = thisRef.pad_with_zeroes(++orderID);
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
    return !getCart() && !this.state.orderPlaced ? (
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
            <CheckoutItems />
          </div>
        </div>
      </div>
    );
  }
}
