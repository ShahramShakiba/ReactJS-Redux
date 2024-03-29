import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducer: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existedItem = state.items.find((item) => item.id === newItem.id);

      if (!existedItem) {
        state.items.push({
          itemID: newItem.id,
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

    removeFromCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
