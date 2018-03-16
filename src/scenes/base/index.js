import React, { Component } from 'react';
import logo from 'images/logo.svg';
import './index.scss';
import {NavBar} from './navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <NavBar />
      </div>
    );
  }
}

export default App;
