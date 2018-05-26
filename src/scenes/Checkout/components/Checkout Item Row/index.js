import React, { Component } from "react";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

export class CheckoutItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.getCart()
    };

    this.itemName = this.props.itemName;
    this.itemSize = this.props.itemSize.toUpperCase();
    this.itemVariation = this.props.itemVariation;
    this.itemQuantity = this.props.itemQuantity;
    this.itemImage = this.props.itemImage;
    this.totalCost = this.props.totalCost ? this.props.totalCost : 30;
  }

  getCart() {
    const cookies = new Cookies();
    let currentCart = cookies.get("My Cart");
    return currentCart;
  }

  render() {
    return (
      <div className="row pb-2">
        <div className="col">
          <img
            className="d-block"
            src={this.itemImage}
            alt={`${this.itemName} - ${this.itemVariation}`}
          />{" "}
        </div>
        <div className="col text-muted text-truncate">
          {" "}
          <h5 className="text-dark">${this.totalCost}</h5>
          <span> {this.itemName}</span>
          <br />
          <span> {this.itemVariation}</span>
          <br />
          <span> QTY: {this.itemQuantity}</span>
        </div>
      </div>
    );
  }
}

CheckoutItemRow.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemVariation: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemImage: PropTypes.string,
  totalCost: PropTypes.number
};
