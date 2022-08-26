import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../components/CartDrawer/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;