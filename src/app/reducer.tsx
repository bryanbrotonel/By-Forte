import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;