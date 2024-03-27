import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

export default function Counter() {
  // Get access to data that managed in Redux store
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1> Redux Counter </h1>

      <div className={classes.value}> {counter} </div>

      <div>
        <button onClick={handleDecrement}> Decrement ⇣ </button>
        <button onClick={handleIncrement}> ⇡ Increment </button>
      </div>

      <button onClick={toggleCounterHandler}> Toggle Counter </button>
    </main>
  );
}

/* useSelector
- React Redux will create a subscription to the Redux store's state for this component, and get the value of `counter` key 
*/
