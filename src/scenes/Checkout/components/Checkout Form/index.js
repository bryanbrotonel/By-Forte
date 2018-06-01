import React, { Component } from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import { removeCart } from "./../../../../helpers/cartCookieHelpers";

import { CheckoutFAQ } from "./../Checkout FAQ";

export class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      termsAndConditions: false
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    event.preventDefault();

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    removeCart();
    this.props.handleCheckoutSubmit(this.state);
  }

  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">CHECKOUT</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="uk-input"
                value={this.state.firstName}
                onChange={this.handleFormChange}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="uk-input"
                value={this.state.lastName}
                onChange={this.handleFormChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="uk-input"
              value={this.state.email}
              onChange={this.handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                id="termsAndConditions"
                name="termsAndConditions"
                className="uk-checkbox"
                type="checkbox"
                value={this.state.termsAndConditions}
                onChange={this.handleFormChange}
                required
              />{" "}
              I agree with the{" "}
              <NavLink to="/terms-and-conditions" className="text-muted ">
                <u>terms and conditions</u>
              </NavLink>
            </label>
          </div>
          <CheckoutFAQ />
          <div className="align-items-right d-flex flex-row-reverse">
            <input
              type="submit"
              className="uk-button uk-button-default uk-form-width-medium text-center"
              value="PLACE YOUR ORDER"
            />
          </div>
        </form>
      </div>
    );
  }
}

CheckoutForm.propTypes = {
  handleCheckoutSubmit: PropTypes.func.isRequired
};
