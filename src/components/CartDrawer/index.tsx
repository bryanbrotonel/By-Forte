import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Drawer from '../Drawer';
import CartItemPreview from './CartItemPreview';
import {
  selectCartItems,
  selectCartSubTotal,
  selectDrawerToggle,
  toggleDrawer,
} from '../../app/cartSlice';

function CartDrawer() {
  let dispatch = useAppDispatch();

  const cartItems = useAppSelector(selectCartItems);
  const cartSubtotal = useAppSelector(selectCartSubTotal);
  const cartDrawerState = useAppSelector(selectDrawerToggle);

  let navigate = useNavigate();
  let location = useLocation();

  const onCheckout = () => {
    // Close the drawer
    dispatch(toggleDrawer());

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
            return <CartItemPreview key={index} cartItemID={cartItem.id} />;
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
  } else {
    cartContent = (
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-gray-500 uppercase text-xs">Your cart is empty</p>
      </div>
    );
  }

  return (
    <Drawer
      poistion={'right'}
      display={cartDrawerState}
      toggleMenu={() => {
        dispatch(toggleDrawer());
      }}
    >
      <h1 className="uppercase font-semibold mb-12">Shopping Cart</h1>
      {cartContent}
    </Drawer>
  );
}

export default CartDrawer;
