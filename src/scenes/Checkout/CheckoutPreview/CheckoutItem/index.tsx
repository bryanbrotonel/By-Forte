import React from 'react';
import { TypeCartItem } from '../../../../types';

function CheckoutItem(props: { cartItem: TypeCartItem }) {
  const { cartItem } = props;
  const product = cartItem.item;

  return (
    <div className="flex gap-6 justify-evenly">
      <div>
        <img
          src={product.image}
          alt={`${product.name} - Image`}
          className="aspect-square w-32"
        />
      </div>
      <div className="mb-4 text-sm">
        <h1 className="uppercase font-semibold mb-2"></h1>
        <p>
          {product.variant} / {product.size}
        </p>
        <p>Quantity: {cartItem.quantity}</p>
        <div className="mt-2">
          <p>Total: CAD$${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
