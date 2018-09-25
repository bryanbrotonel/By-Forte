import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class ThankYou extends Component {
  render() {
    var divStyle = {
      width: "300px"
    };

    return (
      <div className="container hv-center">
        <h1>Thank You</h1>
        {/* <h4 className="text-muted">Your order is being processed</h4> */}
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
            CONTINUE SHOPPING
          </button>
        </NavLink>
      </div>
    );
  }
}
