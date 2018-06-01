import React, { Component } from "react";

import PropTypes from "prop-types";

export class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ passwordValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state.passwordValue);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="password"
            name="password"
            value={this.state.passwordValue}
            onChange={this.handleChange}
          />
        </form>
      </React.Fragment>
    );
  }
}

PasswordInput.propTypes = {
  signIn: PropTypes.func.isRequired
}
