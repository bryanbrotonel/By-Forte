import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export class CartRow extends Component {

  removeItem(e) {
    e.preventDefault();
    console.log('Remove item');
  }

  render() {
    let itemName = this.props.itemName;
    let itemSize = this.props.itemSize.toUpperCase();
    let itemVariation = this.props.itemVariation;
    let itemImage = this.props.itemImage;
    let totalCost = this.props.totalCost ? this.props.totalCost : 1;

    return (
      <div className="row cart-row">
        <div className="col-md-1 align-self-center d-none d-md-block">
          <button onClick={this.removeItem} className="btn">
            <h3 className="text-muted">x</h3>
          </button>
        </div>
        <div className="col-5 col-md-2">
          <img
            className="d-block"
            src={itemImage}
            alt={`${itemName} - ${itemVariation}`}
          />
        </div>
        <div className="col-7 col-md-9">
          <div className="row text-center">
            <div className="col-8 h-100">
              <h5 className="row"> {itemName}</h5>
              <h6 className="row text-muted">COLOR: {itemVariation}</h6>
              <h6 className="row text-muted">SIZE: {itemSize}</h6>
              <h6 className="row text-muted d-md-none d-lg" onClick={this.removeItem}>REMOVE</h6>
            </div>
            <div className="col-6 col-md-2 ml-auto">
              <span>1</span>
            </div>
            <div className="col-6 col-md-2">
              <span>$30</span>
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
  itemImage: PropTypes.string,
  totalCost: PropTypes.number
};
