import React, { Component } from "react";
import PropTypes from "prop-types";

import { getCart } from "../../../../helpers/cookieHelpers";
import { getProductInfo } from "../../../../helpers/dbHelpers";

export class CheckoutItemRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: getCart(),
      item: {
        itemName: "",
        itemVariation: "",
        itemImage:
          "https://raw.githubusercontent.com/diegocsandrim/sharp-test/master/output1.png",
        itemPrice: "",
        itemSize: this.props.itemSize,
        itemQuantity: this.props.itemQuantity
      },
      isLoading: true
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;
    getProductInfo(this.props.itemName, this.props.itemVariation).then(function(
      productInfo
    ) {
      self.setState(prevState => ({
        item: {
          ...prevState.item,
          itemName: productInfo.productName,
          itemVariation: productInfo.productVariation,
          itemImage: productInfo.productImages[0],
          itemPrice: productInfo.productPrice
        },
        isLoading: false
      }));
    });
  }

  render() {
    const { isLoading, item } = this.state;
    const {
      itemName,
      itemVariation,
      itemImage,
      itemSize,
      itemQuantity,
      itemPrice
    } = item;

    return isLoading ? (
      <p className="text-center text-muted">Loading...</p>
    ) : (
      <div className="row pb-2">
        <div className="col">
          <img
            className="d-block"
            src={itemImage}
            alt={`${itemName} - ${itemVariation}`}
          />{" "}
        </div>
        <div className="col text-muted text-truncate text-uppercase">
          {" "}
          <h5 className="text-dark">${itemPrice}</h5>
          <span> {itemName}</span>
          <br />
          <span> {itemSize}</span>
          <br />
          <span> QTY: {itemQuantity}</span>
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
