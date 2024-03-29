import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: 'cart',

  initialState: initialCartState,

  reducers: {
    //replace frontend-cart with the cart we're loading from the firebase
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const existedItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existedItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price, // since initially quantity is "1"
          name: newItem.title,
        });
      } else {
        //if item was existed already
        existedItem.quantity++;
        existedItem.totalPrice = existedItem.totalPrice + newItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existedItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existedItem.quantity--;
        existedItem.totalPrice = existedItem.totalPrice - existedItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
