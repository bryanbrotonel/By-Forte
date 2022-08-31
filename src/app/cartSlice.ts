import _ from 'lodash';
import Cookies from 'js-cookie';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { CartItem, CartProduct, CheckoutOrder, TypeCartState } from '../types';
import { fetchFirebase } from '../api/firebase';

// Initial state of cart
const initialState: TypeCartState = {
  items: [],
  quantity: 0,
  subTotal: 0,
  total: 0,
  toggleDrawer: false,
  orderState: 'idle',
};

const setCookie = (value: string) => {
  Cookies.set('cart', value);
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

      setCookie(JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      // Find item by id and remove it from the cart
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(index, 1);

      const cartItemTotal = action.payload.item.price * action.payload.quantity;

      // Calculate the total quantity of items in the cart
      state.quantity -= action.payload.quantity;

      // Calculate the totals
      state.subTotal -= cartItemTotal;
      state.total -= cartItemTotal;

      setCookie(JSON.stringify(state));
    },
    // Update quantity of item in cart
    updateItemQuantity(
      state,
      action: PayloadAction<[product: CartProduct, newQuantity: number]>
    ) {
      const [product, newQuantity] = action.payload;
      const cartItem = state.items.find((item) =>
        _.isEqual(item.item, product)
      );

      if (cartItem) {
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

        setCookie(JSON.stringify(state));
      }
    },
    // Set the cart state
    setCart: (state, action: PayloadAction<TypeCartState>) => {
      state.items = action.payload.items;
      state.quantity = action.payload.quantity;
      state.subTotal = action.payload.subTotal;
      state.total = action.payload.total;
    },
    // Clear the cart
    clearCart: (state) => {
      // Clear cart values
      state.items = [];
      state.quantity = 0;
      state.subTotal = 0;
      state.total = 0;

      Cookies.remove('cart');
    },
    setOrderState(
      state,
      action: PayloadAction<'idle' | 'pending' | 'success'>
    ) {
      state.orderState = action.payload;
    },
    toggleDrawer(state) {
      state.toggleDrawer = !state.toggleDrawer;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderData.pending, (state, action) => {
        // Sets status to loading when fetchPosts thunk is fetching data
        state.orderState = 'processing';
      })
      .addCase(sendOrderData.fulfilled, (state, action) => {
        // Sets status to succeeded when fetchPosts thunk is receives data
        state.orderState = 'complete';
        // Appends data to blog posts
      });
  },
});

// Redux aync thunk that hadnles cart checkout
export const sendOrderData = createAsyncThunk(
  'cart/checkoutOrder',
  async (order: CheckoutOrder) => {
    // Get orderID from firebase
    const orderID = await fetchFirebase({
      action: 'writeOrderData',
      payload: JSON.stringify(order),
    });

    // Add generated id to order
    _.assignIn(order, { id: orderID });

    await fetch('/.netlify/functions/orderEmail', {
      method: 'POST',
      body: JSON.stringify({ payload: order }),
    });

    return order.id;
  }
);

export const {
  addToCart,
  removeFromCart,
  updateItemQuantity,
  clearCart,
  setCart,
  setOrderState,
  toggleDrawer,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

// Get the cart items
export const selectCartItems = (state: RootState) => state.cart.items;

// Get the total quantity of items in the cart
export const selectCartQuantity = (state: RootState) => state.cart.quantity;

// Get the subtotal of the cart
export const selectCartSubTotal = (state: RootState) => state.cart.subTotal;

// Get the total of the cart
export const selectCartTotal = (state: RootState) => state.cart.total;

// Select order completion status
export const selectOrderState = (state: RootState) => state.cart.orderState;

// Get the cart toggle drawer state
export const selectDrawerToggle = (state: RootState) => state.cart.toggleDrawer;

export const selectCartItemById = (state: RootState, cartItemId: string) =>
  state.cart.items.find((item) => item.id === cartItemId);

export default cartSlice.reducer;
