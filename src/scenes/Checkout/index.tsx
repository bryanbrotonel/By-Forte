import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { selectCartItems } from '../../app/cartSlice';
import { useAppSelector } from '../../app/hooks';
import CheckoutForm from './CheckoutForm';
import CheckoutPreview from './CheckoutPreview';

function Checkout() {
  const cartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    document.body.classList.add('bg-gray-100');
    return () => {
      document.body.classList.remove('bg-gray-100');
    };
  }, []);

  if (cartItems.length === 0) {
    return <Navigate to="/shop" />;
  }

  return (
    <div className="container px-8 md:px-0 xl:px-60">
      <h1 className="uppercase font-semibold my-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="md:basis-4/12">
          <CheckoutPreview cart={cartItems} />
        </div>
        <div className="md:basis-8/12 lg:order-first">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
