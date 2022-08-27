import React, { useEffect } from 'react';
import { CartItem } from '../../../types';
import QuantityField from './QuantityField';

function CartItemPreview(props: { cartItem: CartItem }) {

  const {
    cartItem: { id, quantity, item },
  } = props;

  const { name, variant, size, price, image } = item;

  const [itemQuantity, setItemQuantity] = React.useState(quantity);

  useEffect(() => {
    if (itemQuantity === 0) {
      // TODO: remove item from cart
      console.log('remove item from cart');
    }
  }, [itemQuantity]);

  return (
    <div className="flex gap-4 text-sm">
      <div className="basis-2/5">
        <img
          src={image}
          alt={`${name} Product Image`}
          className="aspect-square w-full"
        />
      </div>
      <div className="basis-3/5">
        <div className="mb-4">
          <h1 className="uppercase font-medium mb-2">{name}</h1>
          <p>{variant} / {size}</p>
        </div>
        <div className='grid grid-cols-2'>
        <QuantityField
          itemQuantity={itemQuantity}
          updateQuantity={setItemQuantity}
        />
        <div>
          <p className="uppercase text-end">CAD${price}</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemPreview;
