import React, { Component } from "react";

import "./styles.scss";

export default class About extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | About";
  }

  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <br />
        <div className="content">
          <p>By Forte is a streetwear brand based in Vancouver, Canada.</p>
          <p>
            We represent what it means to bring the ideas that we visualize in
            our minds to life. By Forte embraces the creative process by
            creating in silence and let our products speak for themselves.
          </p>
          <p>Prosper Through Noise</p>
        </div>
      </div>
    );
  }
}
