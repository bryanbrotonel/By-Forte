import React, { Component } from "react";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

import whiteForte from "images/Mock Ups/By Forte - Mock Up (White).png";
import yellowForte from "images/Mock Ups/By Forte - Mock Up (Yellow).png";
// import ashMantraFront from "images/Mock Ups/Mantra Forte (Front) - Mock Up (Ash).png";
import ashMantraBack from "images/Mock Ups/Mantra Forte (Back) - Mock Up (Ash).png";
// import ncBlueMantraFront from "./../../images/Mock Ups/Mantra Forte (Front) - Mock Up (NC Blue).png";
import ncBlueMantraBack from "images/Mock Ups/Mantra Forte (Back) - Mock Up (NC Blue).png";

import "./styles.css";

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: this.props.location.state.orderedItem,
      cart: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    this.getCookies();
  }

  componentWillUnmount() {
    this.setCookies();
  }

  getCookies() {
    const cookies = new Cookies();
    let currentCart = [];

    if (cookies.get("My Cart") !== undefined) {
      // Assign current state of cart to cookie
      currentCart = cookies.get("My Cart");
    }

    currentCart.push(this.state.newItem);

    // Assign updated cart to state
    this.setState({
      cart: currentCart
    });

    console.log(currentCart);
  }

  setCookies() {
    const cookies = new Cookies();

    cookies.set("My Cart", this.state.cart, { path: "/" });
    console.log(cookies.get("My Cart"));
  }

  render() {
    return (
      <div className="container">
        <h1>Cart Page</h1>
        {/* <p>{this.state.cart}</p> */}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object
};
