import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './styles.css';

export class CartFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <hr />
        <div
          className="d-flex flex-column justify-content-end"
          style={{ gap: '1em' }}
        >
          <div className="pb-md-3 ml-auto">
            <div className="pr-3 pl-3 total-title-box">
              <h5>Total</h5>
            </div>
            <div className="pr-3 pl-3 text-center total-box">
              <h5>
                &#36;
                {this.props.cart.total}
              </h5>
            </div>
          </div>
          <div className="ml-auto">
            <NavLink to="/checkout">
              <button type="submit" className="uk-button uk-button-default">
                <h5>Checkout</h5>
              </button>
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CartFooter.propTypes = {
  cart: PropTypes.object,
};
