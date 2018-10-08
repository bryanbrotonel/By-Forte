import React, { Component } from "react";
import { ProductItem } from "./../Product Item";

import {getProducts} from "./../../../../helpers/dbHelpers";

import "./styles.css";

export class ProductShop extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const self = this;
    getProducts()
      .then(function(inventory) {
        self.setState({
          inventory: inventory,
          isLoading: false
        });
      })
      .catch(function(inventory) {
        console.log("getProducts: catch", inventory);
      });
  }

  render() {
    const { isLoading } = this.state;

    const inventory = this.state.inventory.map(product => (
      <ProductItem
        key={`${product.productName} - ${product.productVariation}`}
        name={product.productName}
        variation={product.productVariation}
        image={product.productImages[0]}
      />
    ));

    return isLoading ? (
      <div className="hv-center text-muted text-center">
        <h2>Loading</h2>
      </div>
    ) : (
      <div className="w-100">
        <div className="row text-center">
          {inventory}
        </div>
      </div>
    );
  }
}
