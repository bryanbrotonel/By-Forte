import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class CartRow extends Component {
  constructor(props) {
    super(props);

    this.itemName = this.props.itemName;
    this.itemSize = this.props.itemSize.toUpperCase();
    this.itemVariation = this.props.itemVariation;
    this.itemQuantity = this.props.itemQuantity;
    this.itemImage = this.props.itemImage;
    this.totalCost = this.props.totalCost ? this.props.totalCost : 30;

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  hanldeRemoveItem(event) {
    console.log("Remove item");
    event.preventDefault();
  }

  handleQuantityChange(event) {
    // TODO: Update item quantity and price
    this.itemQuantity = event.target.value;
    event.preventDefault();
  }

  render() {
    return (
      <div className="row cart-row">
        <div className="col-md-1 align-self-center d-none d-md-block">
          <button onClick={this.hanldeRemoveItem} className="uk-button">
            <h3 className="text-muted">x</h3>
          </button>
        </div>
        <div className="col-5 col-md-2">
          <img
            className="d-block"
            src={this.itemImage}
            alt={`${this.itemName} - ${this.itemVariation}`}
          />
        </div>
        <div className="col-7 col-md-9">
          <div className="row text-center">
            <div className="col-8 h-100">
              <h5 className="row"> {this.itemName}</h5>
              <h6 className="row text-muted">COLOUR: {this.itemVariation}</h6>
              <h6 className="row text-muted">SIZE: {this.itemSize}</h6>
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2 ml-md-auto">
              <input
                type="number"
                className="col-6 col-md-4 text-center"
                defaultValue={this.itemQuantity}
                onChange={this.handleQuantityChange}
              />
            </div>
            <div className="col-6 py-2 py-md-0 col-md-2">
              <span>${this.totalCost}</span>
            </div>
            <div
              className="d-md-none d-lg text-left pt-1 text-danger"
              onClick={this.hanldeRemoveItem}
            >
              <span className="text-danger">REMOVE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CartRow.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemSize: PropTypes.string.isRequired,
  itemVariation: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  itemImage: PropTypes.string,
  totalCost: PropTypes.number
};
