import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../Store/cartSlice';

export default function CartItem(props) {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const handleAddingBooks = () => {
    dispatch(cartActions.addToCart({ id, price, title }));
  };

  const handleRemovingBooks = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3> {title} </h3>

        <div className={classes.price}>
          ${total.toFixed(2)} &nbsp;
          <span className={classes.itemPrice}>
            ( ${price.toFixed(2)} / item )
          </span>
        </div>
      </header>

      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span> {quantity} </span>
        </div>

        <div className={classes.actions}>
          <button onClick={handleRemovingBooks}> - </button>
          <button onClick={handleAddingBooks}> + </button>
        </div>
      </div>
    </li>
  );
}
