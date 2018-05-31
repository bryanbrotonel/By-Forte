import React from "react";
// import {NavLink as RRNavLink} from "react-router-dom";
import "./styles.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer container">
        <hr />
        <ul className="footer-menu">
          <li>CONTACT</li>
          <li>TERMS AND CONDITIONS</li>
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
        </ul>
      </div>
    );
  }
}
