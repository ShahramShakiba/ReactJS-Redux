import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/uiSlice';
import classes from './CartButton.module.css';

export default function CartButton() {
  const dispatch = useDispatch();

  const handleCartOpen = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleCartOpen}>
      <span> My Cart </span>

      <span className={classes.badge}> 1 </span>
    </button>
  );
}
