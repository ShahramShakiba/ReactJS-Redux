import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../Store/redux';

export default function Counter() {
  // Get access to data that managed in Redux store
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    dispatch(counterActions.increase(10));
    // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1> Redux - Counter </h1>

      {showCounter && (
        <>
          <div className={classes.value}> {counter} </div>

          <div>
            <button onClick={handleDecrement}> Decrement ⇣ </button>
            <button onClick={handleIncrease}> ⇡ Increase by 10 </button>
            <button onClick={handleIncrement}> ⇡ Increment </button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}> Toggle Counter </button>
    </main>
  );
}

/* useSelector
 * - React Redux will create a subscription to the Redux store's state for this component, and get the value of `counter` key
 */

/* Redux with "Class-Based Component"
class Counter extends Component {
  handleIncrement() {
    this.props.increment();
  }
  handleDecrement = () => {
    this.props.decrement();
  };
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1> Redux Counter </h1>

        <div className={classes.value}> {this.props.counter} </div>

        <div>
          <button onClick={this.handleDecrement.bind(this)}>Decrement ⇣</button>
          <button onClick={this.handleIncrement.bind(this)}>⇡ Increment</button>
        </div>

        <button onClick={this.toggleCounterHandler}> Toggle Counter </button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
///we execute connect-fn & then it returns a new-fn which we pass Counter
*/
