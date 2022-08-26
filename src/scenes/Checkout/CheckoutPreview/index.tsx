import React from 'react';
import CheckoutItem from './CheckoutItem';

function CheckoutPreview(props: { cart: String[] }) {
  const { cart } = props;

  let cartPreview = cart.map((item, index) => {
    return <CheckoutItem key={index} />;
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
        <h1>Subtotal: $0.00</h1>
        <h1>Total: $0.00</h1>
      </div>
    </div>
  );
}

export default CheckoutPreview;
