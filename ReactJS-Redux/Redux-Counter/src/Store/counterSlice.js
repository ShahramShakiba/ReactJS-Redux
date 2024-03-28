import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

//preparing global State | create unique action-identifier for different reducers
const counterSlice = createSlice({
  //identifier of that piece of state
  name: 'counter',

  initialState: initialCounterState,

  //all reducers this slice needs
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
