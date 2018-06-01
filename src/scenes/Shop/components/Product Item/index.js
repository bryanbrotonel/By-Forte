import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.name,
      productVariation: this.props.variation,
      productImages: this.props.image,
      productLink: `${this.props.name}/${this.props.variation}`
        .split(" ")
        .join("-")
        .toLowerCase()
    };
  }

  render() {
    const {
      productName,
      productVariation,
      productImages,
      productLink
    } = this.state;

    return (
      <div className="col-6 col-lg-3">
        <Link
          to={{
            pathname: `/shop/collections/tops/products/${productLink}`
          }}
        >
          <img
            className="mx-auto d-block"
            src={productImages}
            alt={`${productName} - ${productVariation}`}
          />
        </Link>
        <br />
        <p>
          {productName.toUpperCase()} <br />
          <span className="text-muted">{productVariation.toUpperCase()}</span>
        </p>
      </div>
    );
  }
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  variation: PropTypes.string
};
