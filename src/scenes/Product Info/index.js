import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import { setCart, getCart } from "../../helpers/cookieHelpers";
import { getProductInfo } from "../../helpers/dbHelpers";

import "./styles.css";

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      productVariation: "",
      productImages: [
        "https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png"
      ],
      productPrice: 0,
      itemSize: "Small",
      itemQuantity: 1,
      productDescription: [],
      redirect: false,
      isLoading: true,
      dirtyForm: false
    };

    this.handleOrderedItemChange = this.handleOrderedItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findItem = this.findItem.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    const self = this;
    const {
      match: { params }
    } = this.props;

    getProductInfo(
      params.itemName.replace(/-/g, " "),
      params.itemVariation.replace(/-/g, " ")
    )
      .then(function(productInfo) {
        const productName = productInfo.productName;
        const productVariation = productInfo.productVariation;
        const productImages = productInfo.productImages;
        const productPrice = productInfo.productPrice;
        const productDescription = [
          productInfo.productMaterial,
          productInfo.productPrint,
          productInfo.productFeature
        ];

        self.setState({
          productName: productName,
          productVariation: productVariation,
          productImages: productImages,
          productPrice: productPrice,
          productDescription: productDescription,
          isLoading: false,
          redirect: false
        });

        document.title = "By Forte | " + productName + " - " + productVariation;
      })
      .catch(function() {
        self.setState({
          redirect: true
        });
      });
  }

  handleOrderedItemChange = ({ target: { id, value } }) => {
    if (id === "itemQuantity") {
      value = parseInt(value, 10);

      if (!Number.isInteger(value)) {
        value = String(value);
        this.setState({
          dirtyForm: true
        });
      } else {
        this.setState({
          dirtyForm: false
        });
      }
    }

    this.setState({
      [id]: value
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const cart = this.updateCart();
    this.setState({
      redirect: true
    });

    setCart(cart);
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
        ? { total: 0, subtotal: 0, itemCount: 0, items: [] }
        : previousCart;

    const currentCartItems = currentCart.items;

    const duplicateItem =
      currentCartItems.length !== 0
        ? currentCartItems.findIndex(this.findItem)
        : -1;

    const itemQuantity = orderedItem.itemQuantity;

    if (duplicateItem === -1) {
      currentCartItems.push(orderedItem);
    } else {
      currentCartItems[duplicateItem].itemQuantity += itemQuantity;
    }

    currentCart.itemCount += itemQuantity;

    const itemTotal = orderedItem.itemPrice * itemQuantity;

    currentCart.total += itemTotal;
    currentCart.subtotal += itemTotal;

    return currentCart;
  }

  findItem(currentitem) {
    const orderedItem = this.state;

    return (
      currentitem.itemName === orderedItem.itemName &&
      currentitem.itemSize === orderedItem.itemSize &&
      currentitem.productVariation === orderedItem.productVariation
    );
  }
  render() {
    const {
      redirect,
      isLoading,
      productName,
      productVariation,
      productImages,
      dirtyForm
    } = this.state;
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

    const productImagesDisplay = productImages.map(image => {
      return (
        <div key={image} className="mb-3">
          <img src={image} alt={`${productName} - ${productVariation}`} />
        </div>
      );
    });

    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img
              src={productImages[i]}
              alt={`${productName} - ${productVariation}`}
            />
          </a>
        );
      },
      arrows: false,
      dots: productImagesDisplay.length > 1,
      lazyLoad: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return redirect ? (
      <Redirect to="/error" />
    ) : (
      <div className="container">
        {isLoading ? (
          <h1 className="text-muted hv-center mt-5">Loading...</h1>
        ) : (
          <div className="row justify-content-center mt-5">
            <div className="product-image col-lg-6">
              <Slider {...settings}>{productImagesDisplay}</Slider>
            </div>
            <div className="product-info col-lg-6">
              <div>
                <h3 className="font-weight-bold">{productName}</h3>
                <h4 className="text-muted">{productVariation}</h4>
                <h5>&#36;{this.state.productPrice}</h5>
                <p className="product-desc">{productDescription}</p>
              </div>
              <form
                id="productForm"
                name="productForm"
                onSubmit={this.handleSubmit}
              >
                <div className="input-form">
                  <select
                    id="itemSize"
                    name="itemSize"
                    className="uk-select uk-form-width-small"
                    value={this.state.itemSize}
                    onChange={this.handleOrderedItemChange}
                  >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  <input
                    id="itemQuantity"
                    name="itemQuantity"
                    type="number"
                    className="uk-input uk-form-width-small"
                    min="1"
                    value={this.state.itemQuantity}
                    onChange={this.handleOrderedItemChange}
                  />
                </div>
                <br />
                <div className="input-form">
                  <input
                    disabled={dirtyForm}
                    type="submit"
                    className="uk-button uk-button-default uk-form-width-medium text-center"
                    value="ADD TO CART"
                  />
                </div>
              </form>
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
