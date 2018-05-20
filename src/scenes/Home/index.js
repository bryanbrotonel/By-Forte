import React, { Component } from 'react';
import {PictureRow} from './components/PictureRow';
import './styles.css';

export class Home extends Component {
  render() {
    return (<div>
      <div className='center-align container'>
      <PictureRow/>
      </div>
    </div>)
  }
}
