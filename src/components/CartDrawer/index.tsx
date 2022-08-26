import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '../Drawer';
import CartItem from './CartItem';

function CartDrawer(props: { display: boolean; toggleMenu: Function }) {
  const { display, toggleMenu } = props;
  let navigate = useNavigate();
  let location = useLocation();

  let cartList = [];

  for (let i = 0; i < 3; i++) {
    cartList.push(<CartItem key={i} />);
  }

  const onCheckout = () => {
    // Close the drawer
    toggleMenu(false);

    // Navigate to checkout
    if (location.pathname !== '/checkout') {
      navigate('/checkout');
    }
  };

  return (
    <Drawer poistion={'right'} display={display} toggleMenu={toggleMenu}>
      <h1 className="uppercase font-semibold mb-12">Shopping Cart</h1>
      <div className="space-y-8">{cartList}</div>
      <div className="pt-8 flex justify-end text-end">
        <p className="basis-1/3 uppercase">subtotal</p>
        <p className="basis-1/3 uppercase">CAD$200</p>
      </div>
      <div className="pt-8">
        <button
          onClick={onCheckout}
          className="w-full py-2 bg-black hover:bg-black/70 text-white uppercase "
        >
          Checkout
        </button>
      </div>
    </Drawer>
  );
}

export default CartDrawer;
