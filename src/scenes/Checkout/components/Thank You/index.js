import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class ThankYou extends Component {
  render() {
    var divStyle = {
      width: "300px"
    };

    return (
      <div className="container hv-center">
        <h2>Thank You</h2>
        <div className="text-center" style={divStyle}>
          <p>
            On behalf of the By Forte team, Trisha and Bryan would like to thank
            you for rocking with By Forte from the very start. Your support is
            greatly appreciated.
          </p>
          <div className="text-center font-italic">
            <p>Prosper Through Noise</p>
          </div>
        </div>

        <NavLink to="/shop">
          <button className="uk-button uk-button-default border border-black">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    );
  }
}
