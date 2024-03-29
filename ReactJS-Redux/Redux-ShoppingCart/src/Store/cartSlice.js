import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { cart: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducer: {
    addToCart(state) {},

    removeFromCart(state) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
