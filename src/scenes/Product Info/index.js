import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

import { getCart } from "../../helpers/cartCookieHelpers";
import { getProductInfo } from "../../helpers/dbHelpers";

export class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.productName = this.state = {
      productName: "",
      productVariation: "",
      productImage:
        "https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png",
      productPrice: 0,
      itemSize: "MEDIUM",
      itemQuantity: 1,
      productDescription: [],
      redirect: false,
      isLoading: true
    };

    this.handleOrderedItemChange = this.handleOrderedItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findItem = this.findItem.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    const thisRef = this;
    const { match: { params } } = this.props;
    console.log(params);

    getProductInfo(
      params.itemName.replace(/-/g, " "),
      params.itemVariation.replace(/-/g, " ")
    )
      .then(function(productInfo) {
        console.log(productInfo);
        const productName = productInfo.productName;
        const productVariation = productInfo.productVariation;
        const productImage = productInfo.productImages[0];
        const productPrice = productInfo.productPrice;
        const productDescription = [
          productInfo.productMaterial,
          productInfo.productPrint,
          productInfo.productFeature
        ];

        thisRef.setState({
          productName: productName,
          productVariation: productVariation,
          productImage: productImage,
          productPrice: productPrice,
          productDescription: productDescription,
          isLoading: false
        });
      })
      .catch(function() {
        // TODO: redirect to error page
        console.log("error page");
      });
  }

  handleOrderedItemChange = ({ target: { id, value } }) => {
    if (id === "itemQuantity") {
      value = parseInt(value, 10);

      if (isNaN(value)) {
        value = 0;
      }
    }

    this.setState({
      [id]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const cookies = new Cookies();

    const cart = this.updateCart();
    this.setState({
      redirect: true
    });
    cookies.set("My Cart", cart, { path: "/" });
  }

  updateCart() {
    const previousCart = getCart();

    const orderedItem = {
      productName: this.state.productName,
      productVariation: this.state.productVariation,
      itemSize: this.state.itemSize,
      itemPrice: this.state.productPrice,
      itemQuantity: this.state.itemQuantity
    };

    const currentCart =
      !previousCart || previousCart === undefined || previousCart.length === 0
        ? { total: 0, items: [] }
        : previousCart;

    const currentCartItems = currentCart.items;

    const duplicateItem =
      currentCartItems.length !== 0
        ? currentCartItems.findIndex(this.findItem)
        : -1;

    if (duplicateItem === -1) {
      currentCartItems.push(orderedItem);
    } else {
      currentCartItems[duplicateItem].itemQuantity += orderedItem.itemQuantity;
    }

    currentCart.total += orderedItem.itemPrice * orderedItem.itemQuantity;

    return currentCart;
  }

  findItem(currentitem) {
    const orderedItem = this.state;

    console.log(currentitem);
    console.log(orderedItem);

    return (
      currentitem.itemName === orderedItem.itemName &&
      currentitem.itemSize === orderedItem.itemSize &&
      currentitem.productVariation === orderedItem.productVariation
    );
  }

  render() {
    const { redirect, isLoading } = this.state;
    const productDescription = [];

    if (redirect) {
      return <Redirect to="/cart" />;
    }

    for (var i = 0; i < this.state.productDescription.length; i++) {
      productDescription.push(
        <React.Fragment key={this.state.productDescription[i]}>
          {this.state.productDescription[i].toUpperCase()}
          <br />
        </React.Fragment>
      );
    }

    return (
      <div className="container middle-align">
        {isLoading ? (
          <h1 className="text-muted">Loading...</h1>
        ) : (
          <div>
            <div className="row justify-content-md-center">
              <div className="col-md-5 pb-5 pb-md-0">
                <img
                  src={this.state.productImage}
                  alt={`${this.productName} - ${this.state.productVariation}`}
                />
              </div>
              <div className="col-md-5">
                <div>
                  <h2>{this.state.productName.toUpperCase()}</h2>
                  <h4 className="text-muted">
                    {this.state.productVariation.toUpperCase()}
                  </h4>
                  <h5>${this.state.productPrice}</h5>
                </div>
                <p>{productDescription}</p>
                <form
                  id="productForm"
                  name="productForm"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="form-group col-5">
                      {" "}
                      <select
                        id="itemSize"
                        name="itemSize"
                        className="uk-select"
                        value={this.state.itemSize}
                        onChange={this.handleOrderedItemChange}
                      >
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="LARGE">LARGE</option>
                      </select>
                    </div>
                    <div className="col-3 h-100">
                      <input
                        id="itemQuantity"
                        name="itemQuantity"
                        type="number"
                        className="uk-input"
                        min="1"
                        value={this.state.itemQuantity}
                        onChange={this.handleOrderedItemChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-5 col-8">
                      <input
                        type="submit"
                        className="uk-button uk-button-default uk-form-width-medium text-center w-100"
                        value="ADD TO CART"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ProductInfo.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
