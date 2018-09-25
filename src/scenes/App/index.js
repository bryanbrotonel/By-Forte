import React, { Component } from "react";
import Routes from "routes";

import { Fade } from "reactstrap";

import {
  setEnabledCookies,
  getEnabledCookies
} from "./../..//helpers/cookieHelpers";

import { CookiesNotification } from "./../../components/CookiesNotification";

import { NavBar } from "components/Navbar";
import { Footer } from "components/Footer";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cookiesEnabled: getEnabledCookies()
    };

    this.handleConfirmCookies = this.handleConfirmCookies.bind(this);
  }

  handleConfirmCookies() {
    setEnabledCookies();
    this.forceUpdate();
  }

  render() {

    return (
      <div id="app" className="uk-offcanvas-content">
        <div id="NavBar">
          <NavBar />
        </div>
        <div id="body">
          <Routes />
        </div>
        <div id="Footer">
          <Footer />
        </div>
        {!getEnabledCookies() ? (
          <Fade in={!getEnabledCookies()} out={getEnabledCookies()}>
            <CookiesNotification
              handleConfirmCookies={this.handleConfirmCookies}
            />
          </Fade>
        ) : null}
      </div>
    );
  }
}

export default App;
