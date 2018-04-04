import React, {Component} from 'react';
import {NavBar} from 'components/navbar'
import {Footer} from 'components/footer'
import Routes from "routes";
import 'scss/scenes/app.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="NavBar">
          <NavBar/>
        </div>
        <div id="body">
          <Routes/>
        </div>
        <div id="Footer">
          <Footer/>
        </div>
    </div>
  );
  }
}

export default App;
