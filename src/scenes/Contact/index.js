import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    event.preventDefault();

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <h1>CONTACT</h1>
        <br />
        <h5>
          <b>EMAIL</b>
        </h5>
        <a
          href="mailto:supplybyforte@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>supplybyforte@gmail.com</p>
        </a>
        <h5>
          <b>INSTAGRAM</b>
        </h5>
        <a
          href="https://www.instagram.com/supplybyforte/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>@supplybyforte</p>
        </a>
        <h5>
          <b>FACEBOOK</b>
        </h5>
        <a
          href="https://www.facebook.com/supplybyforte"
          target="_blank"
          rel="noreferrer noopener"
        >
          <p>Supply By Forte</p>
        </a>
      </div>
    );
  }
}
