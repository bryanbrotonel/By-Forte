import React, { Component } from "react";
import PropTypes from "prop-types";

import { getCart, removeCart } from "./../../../../helpers/cartCookieHelpers";
import { getProductInfo } from "./../../../../helpers/dbHelpers";

import "./styles.css";

export class CartItemRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: getCart(),
      item: {
        productName: this.props.productName,
        productVariation: this.props.productVariation,
        productImage:
          "https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png",
        productPrice: 0,
        itemSize: this.props.itemSize,
        itemQuantity: this.props.itemQuantity
      },
      isLoading: true
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.hanldeRemoveItem = this.hanldeRemoveItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.findItem = this.findItem.bind(this);
  }

  componentDidMount() {
    const self = this;
    const productName = this.props.productName;
    const productVariation = this.props.productVariation;

    getProductInfo(productName, productVariation)
      .then(function(productInfo) {
        const productImage = productInfo.productImages[0];
        const productPrice = productInfo.productPrice;

        self.setState(prevState => ({
          item: {
            ...prevState.item,
            productImage: productImage,
            productPrice: productPrice
          },
          isLoading: false
        }));
      })
      .catch(function() {
        // TODO: redirect to error page
        console.log("error page");
      });
  }

  hanldeRemoveItem(event) {
    let currentCart = getCart();

    if (this.removeItem(currentCart)) {
      this.props.updateCart(currentCart);
    }

    event.preventDefault();
  }

  removeItem(cartObject) {
    let cartItems = cartObject.items;

    const currentItemIndex = cartItems.findIndex(this.findItem);
    const currentItem = cartItems[currentItemIndex];

    if (currentItem !== undefined) {
      cartObject.total -= currentItem.itemPrice * currentItem.itemQuantity;
      cartItems.splice(currentItemIndex, 1);
      this.props.updateCart(cartObject);
      if (cartItems.length === 0) {
        cartObject.total = 0;
        removeCart();
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
    const { item, isLoading } = this.state;
    var productName = item.productName;
    var productVariation = item.productVariation;

    return isLoading ? (
      <p className="text-center text-muted">Loading...</p>
    ) : (
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
            src={this.state.item.productImage}
            alt={`${productName} - ${productVariation}`}
          />
        </div>
        <div className="col-7 col-md-9">
          <div className="row text-center">
            <div className="col-8 h-100">
              <h5 className="row text-justify"> {productName.toUpperCase()}</h5>
              <h6 className="row text-justify text-muted">
                COLOUR: {productVariation.toUpperCase()}
              </h6>
              <h6 className="row text-justify text-muted">
                SIZE: {this.state.item.itemSize}
              </h6>
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2 ml-md-auto">
              <span>{this.state.item.itemQuantity}</span>
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2">
              <span>${this.state.item.productPrice}</span>
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
  productName: PropTypes.string.isRequired,
  productVariation: PropTypes.string.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemImage: PropTypes.string,
  updateCart: PropTypes.func,
  getCart: PropTypes.func
};
