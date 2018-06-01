import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

export class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      contactLink: "Contact",
      termsLink: "Terms and Conditions",
      refundLink: "Refund Policy",
      instagramLink: "Instagram",
      facebookLink: "Facebook"
    };
  }
  render() {
    const {
      contactLink,
      termsLink,
      refundLink,
      instagramLink,
      facebookLink
    } = this.state;

    return (
      <div className="footer container">
        <hr />
        <div className="d-flex justify-content-between">
          <ul className="footer-menu text-dark">
            <li>
              {" "}
              <NavLink to="/contact">{contactLink}</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">
                {termsLink.toUpperCase()}
              </NavLink>
            </li>
            <li>
              <NavLink to="/refund-Policy">{refundLink}</NavLink>
            </li>
          </ul>
          <ul className="footer-menu text-dark text-right">
            <li>
              <a
                href="https://www.instagram.com/supplybyforte/"
                target="_blank"
                rel="noreferrer noopener"
              >
                {instagramLink}
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/supplybyforte"
                target="_blank"
                rel="noreferrer noopener"
              >
                {facebookLink}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
