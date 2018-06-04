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
          <div className="col-6 p-0">
            <div className="row">
              <input
                className="uk-input"
                type="password"
                name="password"
                value={this.state.passwordValue}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </div>
            {invalidPassword}
          </div>
          <div className="col-6">
            <input
              type="submit"
              className="uk-button uk-button-default"
              value="SUBMIT"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

PasswordInput.propTypes = {
  signIn: PropTypes.func.isRequired,
  validPassword: PropTypes.bool.isRequired,
};
