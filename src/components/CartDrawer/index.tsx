import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartItem } from '../../types';
import Drawer from '../Drawer';
import CartItemPreview from './CartItemPreview';

function CartDrawer(props: { display: boolean; toggleMenu: Function }) {
  const { display, toggleMenu } = props;
  let navigate = useNavigate();
  let location = useLocation();
  
  let item : CartItem = {
    id: 1,
    name: 'Product Name',
    variant: 'Black',
    size: 'S',
    price: 100,
    quantity: 1,
    image: 'https://firebasestorage.googleapis.com/v0/b/by-forte.appspot.com/o/images%2Fproducts%2Fby%20forte%20collegiate%20hoodie%20-%20black%2F1538887688631-By%20Forte%20Collegiate%20Hoodie%20-%20Black.png?alt=media&token=2226165c-5167-472d-b2a0-5b07adabffe2',
  }

  let cartList = [];

  // Simulate cart with 3 items
  for (let i = 0; i < 3; i++) {
    cartList.push(<CartItemPreview key={i} item={item}  />);
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
