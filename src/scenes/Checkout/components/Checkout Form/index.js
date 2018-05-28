import React, { Component } from "react";

export class CheckoutForm extends Component {
  render() {
    return (
      <div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">CHECKOUT</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="uk-input"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Last Name</label>
              <input
                type="text"
                className="uk-input"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" className="uk-input" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>
              <input className="uk-checkbox" type="checkbox" /> I agree with the
              terms and conditions
            </label>
          </div>
          <input
            type="submit"
            className="uk-button uk-button-default uk-form-width-medium text-center"
            value="PLACE YOUR ORDER"
          />
        </form>
      </div>
    );
  }
}
