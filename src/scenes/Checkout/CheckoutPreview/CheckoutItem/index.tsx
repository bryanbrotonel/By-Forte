import React from 'react';
import { TypeCartItem } from '../../../../types';

function CheckoutItem(props: {
  cartItem: TypeCartItem;
  formatter: Intl.NumberFormat;
}) {
  const { cartItem, formatter } = props;
  const product = cartItem.item;

  return (
    <div className="flex justify-between">
      <div>
        <img
          src={product.images[0]}
          alt={`${product.name} - Image`}
          className="aspect-square w-32"
        />
      </div>
      <div className="basis-1/2 mb-4 text-xs uppercase">
        <h1 className="font-semibold text-sm mb-2">{product.name}</h1>
        <p>
          {product.variant} / {product.size}
        </p>
        <p>Quantity: {cartItem.quantity}</p>
        <div className="mt-2">
          <div className="flex flex-row flex-wrap justify-between">
            <span>Price:</span>
            <span>{formatter.format(product.price)}</span>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            <span>Total:</span>
            <span>{formatter.format(product.price * cartItem.quantity)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
