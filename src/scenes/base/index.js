import React, { Component } from 'react';
import logo from 'images/logo.svg';
import 'components/navbar/navbar.scss';
import {NavBar} from 'components/navbar/navbar'

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
