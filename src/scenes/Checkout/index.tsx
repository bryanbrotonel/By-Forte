import React, { useEffect } from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
import {
  clearCart,
  selectCart,
  selectOrderState,
  sendOrderData,
  setOrderState,
} from '../../app/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';
import Cookies from 'js-cookie';
import { TypeCheckoutOrder, CheckoutOrder } from '../../types';
import CheckoutSummary from './CheckoutSummary';
import OrderProcessing from '../../components/OrderProcessing';

function Checkout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const orderState = useAppSelector(selectOrderState);
  const [orderData, setOrderData] = React.useState<TypeCheckoutOrder>(null);

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => {
      document.body.classList.remove('bg-gray-100');
    };
  }, []);

  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  if (
    cart.items.length === 0 &&
    Cookies.get('cart') === undefined &&
    orderState === 'idle'
  ) {
    return <Navigate to="/" />;
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
      cart: _.omit(cart, ['toggleDrawer', 'orderState']),
    } as CheckoutOrder;

    dispatch(sendOrderData(order))
      .then((res) => {
        setOrderData(_.assignIn(order, { id: res.payload }));

        console.log('Order sent succesfully');

        // Clear cart state and cookies
        dispatch(clearCart());
        Cookies.remove('cart');
      })
      .catch((err) => {
        console.log('Order error', err);
      });
  };

  // If or is processing, show processing screen
  if (orderState === 'processing') {
    return <OrderProcessing />;
  }

  // If order is done, show order summary
  if (orderState === 'complete' && orderData) {
    return <CheckoutSummary orderData={orderData} formatter={formatter} />;
  }

  // If order is not done, show checkout form
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
