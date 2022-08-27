import React from 'react';
import { selectCartSubTotal } from '../../../app/cartSlice';
import { useAppSelector } from '../../../app/hooks';
import { CartItem } from '../../../types';
import CheckoutItem from './CheckoutItem';

function CheckoutPreview(props: { cart: CartItem[] }) {
  const { cart } = props;

  const cartSubTotal = useAppSelector(selectCartSubTotal);
  const cartTotal = useAppSelector(selectCartSubTotal);

  let cartPreview = cart.map((item, index) => {
    return <CheckoutItem key={index} cartItem={item} />;
  });

  return (
    <div className="max-h-[40rem] flex flex-col border border-black p-4 bg-white">
      <div>
        <h1 className="uppercase font-semibold pb-4">{cart.length} Items</h1>
      </div>
      <div className="overflow-y-scroll overscroll-none space-y-4">
        {cartPreview}
      </div>
      <div className="pt-4 space-y-4 text-end">
        <h1>Subtotal: ${cartSubTotal}</h1>
        <h1>Total: ${cartTotal}</h1>
      </div>
    </div>
  );
}

export default CheckoutPreview;
