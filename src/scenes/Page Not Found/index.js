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
      <div className="container">
        <h1>PAGE NOT FOUND</h1>
        <NavLink to="/shop">
          <p className="text-muted">Continue shopping.</p>
        </NavLink>
      </div>
    );
  }
}
