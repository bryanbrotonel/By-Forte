import React, { Component } from "react";
import { Navigate } from "react-router";
import PropTypes from "prop-types";

import Slider from "react-slick";

import { setCart, updateCart } from "../../helpers/cookieHelpers";
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
    this.setProductInformation = this.setProductInformation.bind(this);
  }

  componentDidMount() {
    const self = this;
    self.setProductInformation();
  }

  setProductInformation() {
    const self = this;

    const {
      match: { params }
    } = this.props;

    getProductInfo(
      params.itemName.replace(/-/g, " "),
      params.itemVariation.replace(/-/g, " ")
    )
      .then(function(productInfo) {
        const {
          productName,
          productVariation,
          productImages,
          productPrice,
          productDescription
        } = productInfo;

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
      .catch(function(error) {
        console.log(error);
        self.setState({ redirect: true });
      });
  }

  handleOrderedItemChange = ({ target: { id, value } }) => {
    if (id === "itemQuantity") {
      value = parseInt(value, 10);

      if (!Number.isInteger(value)) {
        value = String(value);
        this.setState({ dirtyForm: true });
      } else {
        this.setState({ dirtyForm: false });
      }
    }

    this.setState({ [id]: value });
  };

  handleSubmit(event) {
    event.preventDefault();

    const cart = updateCart(this.state);
    this.setState({ redirect: true });

    setCart(cart);
  }

  render() {
    const {
      redirect,
      isLoading,
      productName,
      productVariation,
      productDescription,
      productImages,
      dirtyForm
    } = this.state;

    if (redirect) {
      return <Navigate to="/cart" />;
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
            <div className="product-image col-12 col-md-10 col-lg-5">
              <Slider {...settings}>{productImagesDisplay}</Slider>
            </div>
            <div className="product-info col-lg-6">
              <div>
                <h3 className="font-weight-bold">{productName}</h3>
                <h4 className="text-muted">{productVariation}</h4>
                <h5>
                  &#36;
                  {this.state.productPrice}
                </h5>
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
