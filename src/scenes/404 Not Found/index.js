import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1>404 NOT FOUND</h1>
        <NavLink to="/shop">
          <p className="text-muted">Continue shopping.</p>
        </NavLink>
      </div>
    );
  }
}
