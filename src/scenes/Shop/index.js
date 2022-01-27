import React, { Component } from 'react';
import { ProductShop } from './components/Product Shop';

import './styles.css';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    document.title = 'By Forte | Shop';

  }

  render() {
    return (
      <div className="container d-flex mt-5">
        <div className="alert alert-warning" role="alert">
          For demonstration purposes only. All orders will not be processed.
        </div>
        <br />
        <ProductShop />
      </div>
    );
  }
}
