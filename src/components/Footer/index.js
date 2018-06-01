import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer container">
        <hr />
        <ul className="footer-menu pl-0 text-dark">
          <NavLink to="/contact">
            <li>CONTACT</li>
          </NavLink>
          <NavLink to="/terms-and-conditions">
            <li>TERMS AND CONDITIONS</li>
          </NavLink>
          <a
            href="https://www.instagram.com/supplybyforte/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>INSTAGRAM</li>
          </a>
          <a
            href="https://www.facebook.com/supplybyforte"
            target="_blank"
            rel="noreferrer noopener"
          >
            <li>FACEBOOK</li>
          </a>
        </ul>
      </div>
    );
  }
}
