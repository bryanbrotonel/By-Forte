import React, { Component } from "react";
import PropTypes from "prop-types";

import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCart, removeCart } from "./../../../../helpers/cookieHelpers";
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
      isLoading: true,
      redirect: false
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
        self.setState({
          redirect: true
        });
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
      const itemQuantity = currentItem.itemQuantity;

      cartObject.subtotal -= currentItem.itemPrice * itemQuantity;
      cartObject.total = cartObject.subtotal;

      cartObject.itemCount -= itemQuantity;

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

  findItem(currentItem) {
    const { item } = this.state;

    return (
      currentItem.itemName === item.itemName &&
      currentItem.itemSize === item.itemSize &&
      currentItem.itemVariation === item.itemVariation &&
      currentItem.itemQuantity === item.itemQuantity
    );
  }

  render() {
    const { item, isLoading, redirect } = this.state;
    const { productImage, productPrice, itemSize, itemQuantity } = item;
    var productName = item.productName;
    var productVariation = item.productVariation;

    return redirect ? (
      <Redirect to="/error" />
    ) : isLoading ? (
      <p className="text-center text-muted">Loading...</p>
    ) : (
      <div className="row cart-row">
        <div className="col-6 col-md-2">
          <img
            className="d-block"
            src={productImage}
            alt={`${productName} - ${productVariation}`}
          />
        </div>
        <div className="col-5 col-md-4">
          <h5 className="font-weight-bold">{productName}</h5>
          <h6 className="d-block d-md-none">
            &#36;
            {productPrice}
          </h6>
          <ul className="list-unstyled">
            <li>Variation: {productVariation}</li>
            <li>Size: {itemSize}</li>
                <li className="d-block d-md-none">Quantity: {itemQuantity}</li>
          </ul>
        </div>
        <div className="col-1 d-block d-md-none p-0">
          <FontAwesomeIcon
            className="float-left"
            icon="times"
            size="lg"
            onClick={this.hanldeRemoveItem}
          />
        </div>
        <div className="col-12 col-md-6 d-none d-md-block">
          <div className="row">
            <div className="col-5 text-center">
              <span>{itemQuantity}</span>
            </div>
            <div className="col-5 text-center">
              <span>
                &#36;
                {productPrice}
              </span>
            </div>
            <div className="col-1 text-center p-0 float-center">
              <FontAwesomeIcon
                className="ml-4"
                icon="times"
                size="lg"
                onClick={this.hanldeRemoveItem}
              />
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
