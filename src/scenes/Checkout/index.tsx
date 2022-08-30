import React, { useEffect } from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
import { selectCart, sendOrderData } from '../../app/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';
import Cookies from 'js-cookie';
import { TypeCheckoutOrder } from '../../types';

function Checkout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [succesfulOrder, setSuccesfulOrder] = React.useState(false);

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

  if (
    cart.items.length === 0 &&
    Cookies.get('cart') === undefined &&
    !succesfulOrder
  ) {
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
        // Clear cart cookies
        if (Cookies.get('cart') !== undefined) {
          Cookies.remove('cart');
        }

        setSuccesfulOrder(true);
      })
      .catch((err) => {
        console.log('Order error', err);
      });
  };

  return succesfulOrder ? (
    <div className="container flex flex-col items-center justify-center mt-24 px-8 space-y-8 text-center">
      <p className="text-3xl md:text-4xl">&#10084;</p>
      <h1 className="text-5xl md:text-7xl font-bold font-serif text-gray-800">
        Thank You!
      </h1>
      <div className="space-y-4">
        <p className="text-xl">
          You will be receiving a confirmation email with your order details.
        </p>
        <p className=" text-gray-800">
          If you have any questions, please contact us at&nbsp;
          <a
            className="text-blue-500 hover:text-blue-700"
            href="mailto:supplybyforte@gmail.com"
          >
            supplybyforte@gmail.com
          </a>
        </p>
      </div>
    </div>
  ) : (
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
