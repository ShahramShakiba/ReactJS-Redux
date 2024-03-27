import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;

/* Create Function-Reducer only by Redux
import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };
export const INCREMENT = 'INCREMENT';

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };

    case 'INCREASE':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };

    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };

    case 'TOGGLE':
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);
export default store;
*/
