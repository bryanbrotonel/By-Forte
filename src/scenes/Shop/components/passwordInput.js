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
    const { validPassword } = this.props;

    const invalidPassword = !validPassword ? (
      <div className="row text-danger text-justify">
        <p>Wrong Password.</p>
      </div>
    ) : null;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col-8 p-0">
            <input
              className="uk-input"
              type="password"
              name="password"
              value={this.state.passwordValue}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <div className="col-4 align-self-center p-0">
            <input
              type="submit"
              className="uk-button uk-button-default w-100 p-0"
              value="SUBMIT"
            />
          </div>
        </form>
        {invalidPassword}
      </React.Fragment>
    );
  }
}

PasswordInput.propTypes = {
  signIn: PropTypes.func.isRequired,
  validPassword: PropTypes.bool.isRequired
};
