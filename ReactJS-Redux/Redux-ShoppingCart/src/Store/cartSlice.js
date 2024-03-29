import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';

const initialCartState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',

  initialState: initialCartState,

  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existedItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

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

      if (existedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existedItem.quantity--;
        existedItem.totalPrice = existedItem.totalPrice - existedItem.price;
      }
    },
  },
});

// Create Action-Creator
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Loading...',
        message: 'Please wait while your products are being loaded.',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-book-shelves-default-rtdb.firebaseio.com/cart.json',
        {
          //overwriting existing-data or creating a new one if it doesn't exist yet
          method: 'PUT',
          body: JSON.stringify(cart),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Sending Cart Data Failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Your cart has been saved.',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error Saving Cart',
          message: error.message,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
