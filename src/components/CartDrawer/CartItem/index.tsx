import React, { useEffect } from 'react';
import QuantityField from './QuantityField';

function CartItem() {
  const [itemQuantity, setItemQuantity] = React.useState(1);

  useEffect(() => {
    if (itemQuantity === 0) {
      // TODO: remove item from cart
      console.log('remove item from cart');
    }
  }, [itemQuantity]);

  return (
    <div className="flex gap-4">
      <div className="basis-2/5">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2'"
          alt=""
          className="aspect-square w-full"
        />
      </div>
      <div className="basis-3/5">
        <div className="mb-4">
          <h1 className="uppercase font-medium mb-2">Product Name</h1>
          <p>Black / L</p>
        </div>
        <QuantityField
          itemQuantity={itemQuantity}
          updateQuantity={setItemQuantity}
        />
      </div>
    </div>
  );
}

export default CartItem;
