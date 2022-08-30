import React, { useEffect } from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
import { clearCart, selectCart, sendOrderData } from '../../app/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';
import Cookies from 'js-cookie';
import { TypeCheckoutOrder } from '../../types';

function Checkout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const [succesfulOrder, setSuccesfulOrder] = React.useState(true);
  const [orderData, setOrderData] = React.useState<TypeCheckoutOrder>(null);

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => {
      document.body.classList.remove('bg-gray-100');
      setSuccesfulOrder(false);
      setOrderData(null);
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
        setOrderData(_.assignIn(order, { id: res.payload }));

        // Clear cart cookies
        dispatch(clearCart());

        setSuccesfulOrder(true);
      })
      .catch((err) => {
        console.log('Order error', err);
      });
  };

  if (succesfulOrder && orderData) {
    const { id, customer, cart } = orderData;
    console.log('Order data', orderData);

    return (
      <div className="w-full max-w-[56rem] container flex flex-col items-center justify-center mt-24 px-8 space-y-8">
        <div className="space-y-8 mb-8">
          <h1 className="text-5xl font-bold font-serif text-gray-800">
            Thank You, {customer.firstName}!
          </h1>
          <h2 className="text-xl font-bold">
            Order #{id} has been placed successfully.
          </h2>
          <div className="space-y-4 text-slate-500">
            <p>Your confirmation email has been sent to {customer.email}</p>
            <p>
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
        <div className="w-full bg-white rounded p-6 md:p-12">
          <h3 className="text-2xl font-bold">Order Summary</h3>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:basis-7/12 py-8 space-y-8">
              {cart.items.map((cartItem) => (
                <div
                  key={`${cartItem.id}-${cartItem.item.size}`}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-16 h-16 object-cover rounded"
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                    />
                    <div className="flex flex-col">
                      <h4 className="md:text-lg font-bold">
                        {cartItem.item.name}
                      </h4>
                      <div className="text-sm text-gray-500">
                        <p>Color: {cartItem.item.variant}</p>
                        <p>Size: {cartItem.item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">
                      {formatter.format(cartItem.item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:basis-4/12 p-8 bg-slate-100 rounded">
              <div className="whitespace-pre">
                <span className="font-bold text-xl">Summary</span>&nbsp;
                <span className="text-sm">({cart.quantity} items)</span>
              </div>
              <div className="py-6">
                <hr />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatter.format(cart.subTotal)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatter.format(cart.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
