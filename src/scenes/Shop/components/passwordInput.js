import React, { Component } from "react";

export class PasswordInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passwordValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ passwordValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Final Password: ' + this.state.passwordValue);
    this.props.validatePassword(this.state.passwordValue);
  }

  render() {
    return (<React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <input className="form-control" type="password" name="password" value={this.state.passwordValue} onChange={this.handleChange}/>
      </form>
    </React.Fragment>);
  }
}
