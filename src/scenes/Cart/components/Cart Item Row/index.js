import React, { Component } from "react";
import PropTypes from "prop-types";

import { getCart } from "./../../../../helpers/cartCookieHelpers";

import "./styles.css";

export class CartItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: getCart(),
      item: {
        itemName: this.props.itemName,
        itemSize: this.props.itemSize,
        itemVariation: this.props.itemVariation,
        itemQuantity: this.props.itemQuantity,
        itemImage: this.props.itemImage,
        itemPrice: 30,
        totalCost: this.props.totalCost ? this.props.totalCost : this.itemPrice
      }
    };

    this.hanldeRemoveItem = this.hanldeRemoveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.findItem = this.findItem.bind(this);
  }

  hanldeRemoveItem(event) {
    let currentCart = getCart();

    if (this.removeItem(currentCart)) {
      this.props.updateCart(currentCart);
    }

    event.preventDefault();
  }

  removeItem(cartObject) {
    let cartItems = cartObject.items

    const currentItemIndex = cartItems.findIndex(this.findItem);
    const currentItem = cartItems[currentItemIndex];

    if (currentItem !== undefined) {
      cartObject.total -= (currentItem.itemPrice * currentItem.itemQuantity)
      cartItems.splice(currentItemIndex, 1);
      this.props.updateCart(cartObject);
      if (cartItems.length === 0) {
        cartObject.total = 0;
        this.props.removeCart();
      }
      return true;
    }
    return false;
  }

  findItem(currentitem) {
    return (
      currentitem.itemName === this.state.item.itemName &&
      currentitem.itemSize === this.state.item.itemSize &&
      currentitem.itemVariation === this.state.item.itemVariation &&
      currentitem.itemQuantity === this.state.item.itemQuantity
    );
  }

  render() {
    return (
      <div className="row cart-row">
        <div className="col-md-1 align-self-center d-none d-md-block">
          <button
            onClick={this.hanldeRemoveItem}
            className="uk-button uk-button-default"
          >
            <h3>x</h3>
          </button>
        </div>
        <div className="col-5 col-md-2">
          <img
            className="d-block"
            src={this.state.item.itemImage}
            alt={`${this.state.item.itemName} - ${
              this.state.item.itemVariation
            }`}
          />
        </div>
        <div className="col-7 col-md-9">
          <div className="row text-center">
            <div className="col-8 h-100">
              <h5 className="row text-justify"> {this.state.item.itemName}</h5>
              <h6 className="row text-justify text-muted">
                COLOUR: {this.state.item.itemVariation}
              </h6>
              <h6 className="row text-justify text-muted">
                SIZE: {this.state.item.itemSize}
              </h6>
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2 ml-md-auto">
              <span>{this.state.item.itemQuantity}</span>
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2">
              <span>${this.state.item.itemPrice}</span>
            </div>
            <div
              className="d-md-none d-lg text-left pt-1 text-danger"
              onClick={this.state.item.hanldeRemoveItem}
            >
              <span className="text-danger">REMOVE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CartItemRow.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemVariation: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemImage: PropTypes.string,
  totalCost: PropTypes.number,
  updateCart: PropTypes.func,
  getCart: PropTypes.func,
  removeCart: PropTypes.func
};
