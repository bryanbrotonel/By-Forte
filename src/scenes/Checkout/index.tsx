import React, { useEffect } from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
import { selectCart, sendOrderData } from '../../app/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';
import Cookies from 'js-cookie';
import { TypeCheckoutOrder } from '../../types';
import { useDispatch } from 'react-redux';

function Checkout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => {
      document.body.classList.remove('bg-gray-100');
    };
  }, []);

  var formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  if (cart.items.length === 0 && Cookies.get('cart') === undefined) {
    return <Navigate to="/shop" />;
  }

  const onFormSubmit = (formInfo: {
    firstName: string;
    lastName: string;
    email: String;
  }) => {
    // Create checkout order

    const order = {
      customer: {
        ...formInfo,
      },
      cart: _.omit(cart, ['toggleDrawer']),
    } as TypeCheckoutOrder;

    dispatch(sendOrderData(order))
      .then((res) => {
        console.log('Order sent', res);
      })
      .catch((err) => {
        console.log('Order error', err);
      });

    // if (Cookies.get('cart') !== undefined) {
    //   Cookies.remove('cart');
    // }

    // Navigate to order confirmation page
    // return <Navigate to="/checkout/success" />;
  };

  return (
    <div className="container px-8 md:px-0 xl:px-60">
      <h1 className="uppercase font-bold my-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="md:basis-4/12">
          <CheckoutPreview cart={cart} formatter={formatter} />
        </div>
        <div className="md:basis-8/12 lg:order-first">
          <CheckoutForm formSubmitCallback={onFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
