import React, {Component} from 'react';
import {NavBar} from 'components/navbar/navbar'
import {Footer} from 'components/footer/footer'
import Routes from "routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <NavBar/>
        <div className ="container">
          <Routes/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
