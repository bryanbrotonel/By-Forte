import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { CartItem, ShopItem, TypeCartState } from '../types';
import _ from 'lodash';

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

      // Add item to cart
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
    // Update quantity of item in cart
    updateItemQuantity(
      state,
      action: PayloadAction<[product: ShopItem, newQuantity: number]>
    ) {
      const [product, newQuantity] = action.payload;
      const cartItem = state.items.find((item) =>
        _.isEqual(item.item, product)
      );

      if (cartItem) {
        // If the new quantity is 0, remove the item from the cart
        // Calculate new quantity and totals
        const cartItemTotal = cartItem.item.price * newQuantity;

        // Update the quantity
        state.quantity += newQuantity - cartItem.quantity;

        // Update the totals
        state.subTotal +=
          cartItemTotal - cartItem.quantity * cartItem.item.price;
        state.total += cartItemTotal - cartItem.quantity * cartItem.item.price;

        // Update the quantity of the item in the cart
        cartItem.quantity = newQuantity;
      }
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

export const { addToCart, removeFromCart, updateItemQuantity, clearCart } =
  cartSlice.actions;

// Get the cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// Get the total quantity of items in the cart
export const selectCartQuantity = (state: RootState) => state.cart.quantity;

// Get the subtotal of the cart
export const selectCartSubTotal = (state: RootState) => state.cart.subTotal;

// Get the total of the cart
export const selectCartTotal = (state: RootState) => state.cart.total;

export const selectCartItemById = (state: RootState, cartItemId: number) =>
  state.cart.items.find((item) => item.id === cartItemId);

export default cartSlice.reducer;
