import React, { Component } from "react";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

import "./styles.css";

export class CartItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.getCart(),
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
    let currentCart = this.getCart();

    if (this.removeItem(currentCart)) {
      this.props.updateCart(currentCart);
    }

    event.preventDefault();
  }

  removeItem(cartObject) {
    const currentItemIndex = cartObject.findIndex(this.findItem);
    const currentItem = cartObject[currentItemIndex];

    if (currentItem !== undefined) {
      cartObject.splice(currentItemIndex, 1);
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

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
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
  getCart: PropTypes.func
};
