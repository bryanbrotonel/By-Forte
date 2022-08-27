import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartItem } from '../../types';
import Drawer from '../Drawer';
import CartItemPreview from './CartItemPreview';
import { selectCartItems, selectCartSubTotal } from './cartSlice';

function CartDrawer(props: { display: boolean; toggleMenu: Function }) {
  const { display, toggleMenu } = props;

  const cartItems = useAppSelector(selectCartItems);
  const cartSubtotal = useAppSelector(selectCartSubTotal);

  let navigate = useNavigate();
  let location = useLocation();

  const onCheckout = () => {
    // Close the drawer
    toggleMenu(false);

    // Navigate to checkout
    if (location.pathname !== '/checkout') {
      navigate('/checkout');
    }
  };

  let cartContent;

  if (cartItems.length > 0) {
    cartContent = (
      <div>
        <div className="space-y-8">
          {cartItems.map((cartItem, index) => {
            return <CartItemPreview key={index} cartItem={cartItem} />;
          })}
        </div>
        <div className="pt-8 flex justify-end text-end">
          <p className="basis-1/3 uppercase">subtotal</p>
          <p className="basis-1/3 uppercase">CAD${cartSubtotal}</p>
        </div>
        <div className="pt-8">
          <button
            onClick={onCheckout}
            className="w-full py-2 bg-black hover:bg-black/70 text-white uppercase "
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
  else {
    cartContent = (
      <div className="flex flex-col justify-center items-center h-full">
        <p className='text-gray-500 uppercase text-xs'>Your cart is empty</p>
      </div>
    );
  }

  return (
    <Drawer poistion={'right'} display={display} toggleMenu={toggleMenu}>
      <h1 className="uppercase font-semibold mb-12">Shopping Cart</h1>
      {cartContent}
    </Drawer>
  );
}

export default CartDrawer;
