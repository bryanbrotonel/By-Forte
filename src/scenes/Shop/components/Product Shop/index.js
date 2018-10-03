import React, { Component } from "react";
import { ProductItem } from "./../Product Item";

import firebase from "firebase/app";

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
    this.getProducts()
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

  getProducts() {
    const self = this;
    this.inventory = [];

    return new Promise(function(resolve, reject) {
      firebase
        .database()
        .ref("inventory")
        .once("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            const productItem = {
              productName: childData.productName,
              productVariation: childData.productVariation,
              productImages: childData.productImages
            };

            self.inventory.push(productItem);
            return self.inventory
              ? resolve(self.inventory)
              : reject(self.inventory);
          });
        });
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
        <h2>LOADING</h2>
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
