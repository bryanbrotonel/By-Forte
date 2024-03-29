import React from 'react';
import { TypeCartState } from '../../../types';
import CheckoutItem from './CheckoutItem';

function CheckoutPreview(props: {
  cart: TypeCartState;
  formatter: Intl.NumberFormat;
}) {
  const { cart, formatter } = props;

  let cartPreview = cart.items.map((item, index) => {
    return <CheckoutItem key={index} cartItem={item} formatter={formatter} />;
  });

  return (
    <div className="max-h-[40rem] flex flex-col border border-black p-4 bg-white">
      <div>
        <h1 className="uppercase font-semibold pb-4">{cart.quantity} Items</h1>
      </div>
      <div className="overflow-y-scroll overscroll-none space-y-4">
        {cartPreview}
      </div>
      <div className="uppercase pt-4 space-y-4 text-end">
        <p className='text-sm'>Subtotal: {formatter.format(cart.subTotal)}</p>
        <p className='font-medium'>Total: {formatter.format(cart.total)}</p>
      </div>
    </div>
  );
}

export default CheckoutPreview;
