import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class ProductItem extends Component {
  render() {
    let name = this.props.name;
    let colour = this.props.colour;
    let image = this.props.image;
    let url = `${name}-${colour}`
      .split(" ")
      .join("-")
      .toLowerCase();

    return (
      <div className="col-6 col-lg-3">
        <Link
          to={{
            pathname: `/shop/collections/tops/products/${url}`,
            state: {
              name: name,
              colour: colour,
              image: image
            }
          }}
        >
          <img
            className="mx-auto d-block"
            src={image}
            alt={`${name} - ${colour}`}
          />
        </Link>
        <p>
          {name} <br />
          <span className="text-muted">{colour}</span>
        </p>
      </div>
    );
  }
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  colour: PropTypes.string
};
