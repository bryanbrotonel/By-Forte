import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { CartItem, TypeCartState } from '../../types';

// Initial state of cart
const initialState: TypeCartState = {
  items: [],
  quantity: 0,
  subTotal: 0,
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);

      // Calculate the total quantity of items in the cart
      state.quantity += action.payload.quantity;

      // Calculate the totals
      state.subTotal += action.payload.price * action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      // Find item by id and remove it from the cart
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);

      // Calculate the total quantity of items in the cart
      state.quantity -= action.payload.quantity;

      // Calculate the totals
      state.subTotal -= action.payload.price * action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
    },
    // Clear the cart
    clearCart: (state) => {
      // Clear cart values
      state.items = [];
      state.quantity = 0;
      state.subTotal = 0;
      state.total = 0;
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Get the cart items
export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
