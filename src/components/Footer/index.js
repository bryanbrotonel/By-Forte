import React from 'react';
// import {NavLink as RRNavLink} from 'react-router-dom';
import './styles.css'

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer container">
          <hr/>
          <div className="row">
            <div className="col-sm">
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget diam finibus, consectetur est vitae, porttitor sapien</p>
            </div>
            <div className="col-sm">
              <h2>LINKS</h2>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </div>
        </div>
    </div>)
  }
}
