import React from 'react';
// import {NavLink as RRNavLink} from 'react-router-dom';
import logo from 'images/By Forte Primary (Black).png'

export class Footer extends React.Component {
  render() {
    return (
      <div className="container footer">
        <hr/>
          <div className="row">
            <div className="col-sm">
              <img id="logo" src={logo} alt="By Forte"/>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget diam finibus, consectetur est vitae, porttitor sapien</p>
            </div>
            <div className="col-sm">
              <h2>Links</h2>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </div>
        </div>
    </div>)
  }
}
