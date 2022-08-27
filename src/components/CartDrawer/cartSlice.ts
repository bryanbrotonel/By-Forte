import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { CartItem, TypeCartState } from '../../types';

// Initial state of cart
const initialState: TypeCartState = {
  items: [],
  quantity: 0,
  subTotal: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const cartItemTotal = action.payload.item.price * action.payload.quantity;

      state.items.push(action.payload);

      // Calculate the total quantity of items in the cart
      state.quantity += action.payload.quantity;

      // Calculate the totals
      state.subTotal += cartItemTotal;
      state.total += cartItemTotal;
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      // Find item by id and remove it from the cart
      const index = state.items.findIndex(
        (item) => item.item.id === action.payload.item.id
      );
      state.items.splice(index, 1);

      const cartItemTotal = action.payload.item.price * action.payload.quantity;

      // Calculate the total quantity of items in the cart
      state.quantity -= action.payload.quantity;

      // Calculate the totals
      state.subTotal -= cartItemTotal;
      state.total -= cartItemTotal;
    },
    // Clear the cart
    clearCart: (state) => {
      // Clear cart values
      state.items = [];
      state.quantity = 0;
      state.subTotal = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Get the cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// Get the total quantity of items in the cart
export const selectCartQuantity = (state: RootState) => state.cart.quantity;

// Get the subtotal of the cart
export const selectCartSubTotal = (state: RootState) => state.cart.subTotal;

// Get the total of the cart
export const selectCartTotal = (state: RootState) => state.cart.total;

export default cartSlice.reducer;
