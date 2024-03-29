import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',

  initialState: { cartOpen: false },
  
  reducers: {
    toggle(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
