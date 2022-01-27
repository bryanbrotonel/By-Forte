import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

import { getCart, setCart } from './../../helpers/cookieHelpers';

import FullCart from './components/Full Cart';
import EmptyCart from './components/Empty Cart';

import './styles.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    const { cart } = this.state;
    let currentCart = getCart();

    document.title = 'By Forte | Cart';

    if (currentCart) {
      this.setState({
        cart: currentCart,
      });
    } else {
      this.updateCart(cart);
    }
  }

  updateCart(cartObject) {
    this.setState({
      cart: cartObject,
    });

    setCart(cartObject);
  }

  render() {
    const { cart } = this.state;
    const self = this;

    let cartItems = cart.items;

    const filledCart =
      cartItems !== (undefined && 'undefined') && cartItems.length !== 0;

    const cartContent = filledCart ? (
      <FullCart cart={cart} getCart={getCart} updateCart={self.updateCart} />
    ) : (
      <EmptyCart />
    );

    return (
      <div className="container d-flex align-items-start flex-column mt-5">
        <div className="row justify-content-between w-100">
          <div className="alert alert-warning" role="alert">
            For demonstration purposes only. All orders will not be processed.
          </div>
          <div className="col-6 v-center">
            <h1 className="mb-0">Cart</h1>
          </div>
          <div className="col-6 p-0 v-center text-right">
            {filledCart && (
              <Link to="/shop">
                <h6 className="text-muted mb-0">Continue shopping</h6>
              </Link>
            )}
          </div>
        </div>
        {cartContent}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.object,
  orderedItem: PropTypes.object,
};
