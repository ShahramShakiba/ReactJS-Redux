import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',

  initialState: { cartOpen: false, notification: null },

  reducers: {
    toggle(state) {
      state.cartOpen = !state.cartOpen;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
