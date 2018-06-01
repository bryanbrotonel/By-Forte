import React, { Component } from "react";
import { ProductItem } from "./../Product Item";

import * as firebase from "firebase";

import "./styles.css";

export class ProductShop extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const self = this;
    this.getProducts()
      .then(function(productList) {
        self.setState({
          productList: productList,
          isLoading: false
        });
      })
      .catch(function(productList) {
        console.log("getProducts: catch", productList);
      });
  }

  getProducts() {
    const self = this;
    this.productList = [];

    return new Promise(function(resolve, reject) {
      firebase
        .database()
        .ref("productList")
        .once("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();

            const productItem = {
              productName: childData.productName,
              productVariation: childData.productVariation,
              productImages: childData.productImages
            };

            self.productList.push(productItem);
            return self.productList
              ? resolve(self.productList)
              : reject(self.productList);
          });
        });
    });
  }

  render() {
    const { isLoading } = this.state;

    const productList = this.state.productList.map(product => (
      <ProductItem
        key={`${product.productName} - ${product.productVariation}`}
        name={product.productName}
        variation={product.productVariation}
        image={product.productImages[0]}
      />
    ));

    return (
      <div className="w-100">
        <div className="row justify-content-between text-center">
          {isLoading ? (
            <h1 className="mx-auto text-muted">Loading...</h1>
          ) : (
            productList
          )}
        </div>
      </div>
    );
  }
}
