import React, { Component } from "react";
import PropTypes from "prop-types";

export class ProductInfo extends Component {
  constructor(props) {
    super(props);

    // TODO: Get info from Database
    const { name, colour, image } = props.location.state;

    this.state = {
      name: name,
      colour: colour.toUpperCase(),
      image: image,
      productDescription: []
    };
  }

  componentDidMount() {

    this.name = this.state.name;
    this.colour = this.state.colour;
    this.image = this.state.image

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
      productDescription: prevState.productDescription.concat(this.productDescriptionInfo)
    }));
  }

  render() {
    const description = [];

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
              <form>
                <div className="form-group uk-margin uk-form-width-medium">
                  <select className="uk-select">
                    <option>MEDIUM</option>
                    <option>LARGE</option>
                  </select>
                </div>
                <button className="uk-button uk-button-default uk-form-width-medium text-center">
                  ADD TO CART
                </button>
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
