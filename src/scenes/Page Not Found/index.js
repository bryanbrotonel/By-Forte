import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class PageNotFound extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title += " | Page not Found";
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Page Not Found</h1>
        <NavLink to="/shop">
          <p>Continue shopping.</p>
        </NavLink>
      </div>
    );
  }
}
