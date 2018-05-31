import React, { Component } from "react";
import { ProductShop } from "./components/Product Shop";
import { PasswordInput } from "./components/passwordInput";

import "./styles.css";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validPassword: false
    };

    this.validatePassword = this.validatePassword.bind(this);
  }

  // Get password callback function
  validatePassword(value) {
    // Validate password

    // Assign new password
    if (value === "a") {
      this.setState({ validPassword: true });
    }
  }

  render() {
    return this.state.validPassword ? (
      <div className="container-d-flex">
        <br />
        <ProductShop />
      </div>
    ) : (
      <div className="container middle-align">
        <PasswordInput validatePassword={this.validatePassword} />
      </div>
    );
  }
}
