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
        itemSize: "Medium",
        itemVariation: colour,
        itemQuantity: 1
      },
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
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

  componentDidUnMount() {
    this.setState({
      redirect: false
    });
  }

  handleChange(event) {
    const selectValue = event.target.value;

    this.setState(prevState => ({
      orderedItem: {
        ...prevState.orderedItem,
        itemSize: selectValue
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const cart = this.updateCart();
    this.setState({
      redirect: true
    });
    const cookies = new Cookies();
    cookies.set("My Cart", cart, { path: "/" });
  }

  updateCart() {
    const cookies = new Cookies();

    let previousCart = cookies.get("My Cart");
    let currentCart = previousCart !== undefined ? previousCart : [];
    const duplicateItem = currentCart.findIndex(this.findItem);

    if (duplicateItem === -1) {
      currentCart.push(this.state.orderedItem);
    } else {
      currentCart[duplicateItem].itemQuantity++;
    }
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
              <form onSubmit={this.handleSubmit}>
                <div className="form-group uk-margin uk-form-width-medium">
                  <select
                    className="uk-select"
                    value={this.state.orderedItem.itemSize}
                    onChange={this.handleChange}
                  >
                    <option value="Medium">MEDIUM</option>
                    <option value="Large">LARGE</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="uk-button uk-button-default uk-form-width-medium"
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
