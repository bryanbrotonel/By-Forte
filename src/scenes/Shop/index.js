import React, {Component} from 'react';
import {ShirtShop} from './components/shirtShop';
import {PasswordInput} from './components/passwordInput';
import './styles.css';

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
    if (value === "password") {
      console.log('facts!');
      this.setState({validPassword: true});
    }

  }

  render() {
    return (<div className="middle-align container">
      { this.state.validPassword ? <ShirtShop/> : <PasswordInput validatePassword={this.validatePassword}/>}
    </div>);
  }
}
