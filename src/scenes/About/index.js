import React, { Component } from "react";
import "./styles.scss";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>ABOUT</h1>
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
