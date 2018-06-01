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
    console.log("--CONTACT FORM SUBMITTED--");
  }

  render() {
    var textareaStyle = {
      resize: "none"
    };

    return (
      <div className="container">
        <div className="col-12 col-md-6 uk-card uk-card-default uk-card-body mx-auto">
          <h2 className="text-dark">CONTACT</h2>
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="uk-input"
                  value={this.state.firstName}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="uk-input"
                  value={this.state.lastName}
                  onChange={this.handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="uk-input"
                value={this.state.email}
                onChange={this.handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Subject">Subject</label>
              <input
                id="subject"
                name="subtject"
                type="text"
                className="uk-input"
                value={this.state.subject}
                onChange={this.handleFormChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="uk-textarea"
                style={textareaStyle}
                value={this.state.message}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="align-items-right d-flex flex-row-reverse">
              <input
                type="submit"
                className="uk-button uk-button-default uk-form-width-small text-center"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
