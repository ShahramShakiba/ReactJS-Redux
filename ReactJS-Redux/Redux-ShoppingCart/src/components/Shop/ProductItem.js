import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

export default function ProductItem({ title, price, description, id }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addToCart({ title, price, id }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3> {title} </h3>

          <div className={classes.price}> ${price.toFixed(2)} </div>
        </header>

        <p> {description} </p>

        <div className={classes.actions}>
          <button onClick={handleAddToCart}> Add to Cart </button>
        </div>
      </Card>
    </li>
  );
}
