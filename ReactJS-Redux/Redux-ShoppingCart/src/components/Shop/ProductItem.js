import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

export default function ProductItem({ title, price, description, id }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })
    
    dispatch(cartActions.addToCart({ id, title, price }));
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
