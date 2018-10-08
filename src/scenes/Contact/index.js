import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | Contact";
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Contact</h1>
        <br />
        <div>
          {" "}
          <h5>
            <b>Email</b>
          </h5>
          <a
            href="mailto:supplybyforte@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>supplybyforte@gmail.com</p>
          </a>
        </div>
        <div>
          {" "}
          <h5>
            <b>Instagram</b>
          </h5>
          <a
            href="https://www.instagram.com/supplybyforte/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>@supplybyforte</p>
          </a>
        </div>
        <div>
          {" "}
          <h5>
            <b>Facebook</b>
          </h5>
          <a
            href="https://www.facebook.com/byforte"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>By Forte</p>
          </a>
        </div>
      </div>
    );
  }
}
