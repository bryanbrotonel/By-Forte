import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

import Cookies from "universal-cookie";

export class ProductInfo extends Component {
  constructor(props) {
    super(props);

    // TODO: Get info from Database
    const { name, colour, image } = props.location.state;

    this.state = {
      name: name,
      colour: colour.toUpperCase(),
      image: image,
      productDescription: [],
      orderedItem: {
        itemName: name,
        itemSize: "MEDIUM",
        itemVariation: colour,
        itemQuantity: 1,
        itemPrice: 30
      },
      redirect: false
    };

    this.handleOrderedItemChange = this.handleOrderedItemChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findItem = this.findItem.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    this.name = this.state.name;
    this.colour = this.state.colour;
    this.image = this.state.image;

    switch (this.state.name) {
      case "BY FORTE TEE":
        this.productDescriptionInfo = [
          "100% COTTON",
          "SCREEN PRINTED",
          "FRONT BY FORTE LOGO"
        ];
        break;
      case "MANTRA TEE":
        this.productDescriptionInfo = [
          "100% COTTON",
          "SCREEN PRINTED",
          "BACK MANTRA LOGO"
        ];
        break;
      default:
        break;
    }

    this.setState(prevState => ({
      productDescription: prevState.productDescription.concat(
        this.productDescriptionInfo
      )
    }));
  }

  handleOrderedItemChange = ({ target: { id, value } }) => {
    if (id === "itemQuantity") {
      value = parseInt(value, 10);
      console.log(isNaN(value));

      if (isNaN(value)) {
        value = 0;
      }
    }

    this.setState(prevState => ({
      orderedItem: {
        ...prevState.orderedItem,
        [id]: value
      }
    }));
  };

  handleSubmit(event) {
    event.preventDefault();
    const cookies = new Cookies();
    
    const cart = this.updateCart();
    this.setState({
      redirect: true
    });
    cookies.set("My Cart", cart, { path: "/" });
  }

  updateCart() {
    const cookies = new Cookies();
    const previousCart = cookies.get("My Cart");

    const currentCart =
      previousCart !== undefined ? previousCart : { total: 0, items: [] };

    const currentCartItems = currentCart.items;

    if (currentCart === undefined) {
      return;
    }
    const duplicateItem =
      currentCartItems.length !== 0
        ? currentCartItems.findIndex(this.findItem)
        : -1;

    let orderedItem = this.state.orderedItem;

    if (duplicateItem === -1) {
      currentCartItems.push(orderedItem);
    } else {
      currentCartItems[duplicateItem].itemQuantity += orderedItem.itemQuantity;
    }

    currentCart.total += orderedItem.itemPrice * orderedItem.itemQuantity;

    return currentCart;
  }

  findItem(currentitem) {
    let orderedItem = this.state.orderedItem;

    return (
      currentitem.itemName === orderedItem.itemName &&
      currentitem.itemSize === orderedItem.itemSize &&
      currentitem.itemVariation === orderedItem.itemVariation
    );
  }

  render() {
    const { redirect } = this.state;
    const description = [];

    if (redirect) {
      return <Redirect to="/cart" />;
    }

    for (var i = 0; i < this.state.productDescription.length; i++) {
      description.push(
        <React.Fragment key={this.state.productDescription[i]}>
          {this.state.productDescription[i]}
          <br />
        </React.Fragment>
      );
    }

    return (
      <div className="container middle-align">
        <div>
          <div className="row align-items-center">
            <div className="col-sm">
              <img
                className="w-100"
                src={this.state.image}
                alt={`${this.name} - ${this.colour}`}
              />
            </div>
            <div className="col-sm">
              <div>
                <h2>{this.name}</h2>
                <h4 className="text-muted">{this.colour}</h4>
                <h5>$30</h5>
              </div>
              <p>{description}</p>
              <form id="productForm" name="productForm" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-3">
                    {" "}
                    <select
                      id="itemSize"
                      name="itemSize"
                      className="uk-select"
                      value={this.state.orderedItem.itemSize}
                      onChange={this.handleOrderedItemChange}
                    >
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="LARGE">LARGE</option>
                    </select>
                  </div>
                  <div className="form-group col-2">
                    <input
                      id="itemQuantity"
                      name="itemQuantity"
                      type="number"
                      className="uk-input"
                      min="1"
                      value={this.state.orderedItem.itemQuantity}
                      onChange={this.handleOrderedItemChange}
                    />
                  </div>
                </div>
                <input
                  type="submit"
                  className="uk-button uk-button-default uk-form-width-medium text-center"
                  value="ADD TO CART"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  location: PropTypes.object.isRequired
};
