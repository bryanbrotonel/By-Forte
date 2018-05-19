import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.url = `${this.props.name}-${this.props.colour}`
      .split(" ")
      .join("-")
      .toLowerCase();

    this.state = {
      name: this.props.name,
      colour: this.props.colour,
      image: this.props.image,
      url: this.url
    };
  }

  render() {
    return (
      <div className="col-6 col-lg-3">
        <Link
          to={{
            pathname: `/shop/collections/tops/products/${this.url}`,
            state: {
              name: this.state.name,
              colour: this.state.colour,
              image: this.state.image
            }
          }}
        >
          <img
            className="display-image mx-auto d-block"
            src={this.state.image}
            alt={`${this.state.name} - ${this.state.colour}`}
          />
        </Link>
        <p>
          {this.state.name} <br />
          <span className="text-muted">{this.state.colour}</span>
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
