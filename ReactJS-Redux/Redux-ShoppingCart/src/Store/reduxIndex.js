import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './uiSlice';
import CartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: CartReducer,
  },
});

export default store;
