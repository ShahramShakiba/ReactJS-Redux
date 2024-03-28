import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

//merging multiple reducers into 1 reducer
const store = configureStore({
  //expected property
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
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
