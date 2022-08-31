import React, { useEffect } from 'react';
import { setOrderState } from '../../../app/cartSlice';
import { useAppDispatch } from '../../../app/hooks';
import { TypeCheckoutOrder } from '../../../types';

function CheckoutSummary(props: {
  orderData: TypeCheckoutOrder;
  formatter: Intl.NumberFormat;
}) {
  const {
    formatter,
    orderData: { id, customer, cart },
  } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Scroll to top of page
    window.scrollTo({ top: 0, left: 0 });

    return () => {
      // When customer leaves summary, reset order state
      dispatch(setOrderState('idle'));
    };
  }, []);

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
                    className="w-16 h-16 object-cover rounded bg-gray-100"
                    src={cartItem.item.image}
                    alt={cartItem.item.name}
                  />
                  <div className="flex flex-col">
                    <h4 className="md:text-lg font-bold">
                      {cartItem.item.name}
                    </h4>
                    <div className="text-sm text-gray-500">
                      <p>
                        Color:{' '}
                        <span className="uppercase">
                          {cartItem.item.variant}
                        </span>
                      </p>
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

export default CheckoutSummary;
