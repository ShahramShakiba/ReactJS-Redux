import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }

   if (action.type === 'INCREASE') {
     return {
       counter: state.counter + action.amount,
     };
   }

  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);
export default store;
