import React, { Component } from 'react';
import {PictureRow} from 'components/picture-row';
import 'scss/scenes/home.css';

export class Home extends Component {
  render() {
    return (<div>
      <div className="center-align container">
      <PictureRow/>
      </div>
    </div>)
  }
}
