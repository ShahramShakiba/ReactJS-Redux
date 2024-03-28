import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };

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

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//merging multiple reducers into 1 reducer
const store = configureStore({
  //expected property
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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
