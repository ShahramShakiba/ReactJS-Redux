import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './uiSlice';
import CartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    ui: uiSlice,
    cart: CartSlice,
  },
});

export default store;
