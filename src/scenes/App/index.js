import React, {Component} from "react";
import {NavBar} from "components/Navbar"
import {Footer} from "components/Footer"
import Routes from "routes";
import "./styles.css";

class App extends Component {
  render() {
    return (<div id="app">
      <div id="NavBar">
        <NavBar/>
      </div>
      <div id="body">
        <Routes/>
      </div>
      <div id="Footer">
        <Footer/>
      </div>
    </div>);
  }
}

export default App;
