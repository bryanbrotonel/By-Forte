import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  removeFromCart,
  selectCartItemById,
  updateItemQuantity,
} from '../../../app/cartSlice';
import QuantityField from './QuantityField';

function CartItemPreview(props: { cartItemID: string }) {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    selectCartItemById(state, props.cartItemID)
  );

  const item = cartItem.item;

  const setItemQuantity = (quantity: number) => {
    if (quantity === 0) {
      dispatch(removeFromCart(cartItem));
    } else {
      dispatch(updateItemQuantity([item, quantity]));
    }
  };

  return (
    <div className="flex gap-4 text-sm">
      <div className="basis-2/5">
        <img
          src={item.image}
          alt={`${item.name} - Product Image`}
          className="aspect-square w-full"
        />
      </div>
      <div className="basis-3/5">
        <div className="mb-4">
          <h1 className="uppercase font-semibold mb-2">{item.name}</h1>
          <p className="uppercase">
            {item.variant} / {item.size}
          </p>
        </div>
        <div className="grid grid-cols-2">
          <QuantityField
            itemQuantity={cartItem.quantity}
            updateQuantity={setItemQuantity}
          />
          <div>
            <p className="uppercase text-end">CAD${item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemPreview;
