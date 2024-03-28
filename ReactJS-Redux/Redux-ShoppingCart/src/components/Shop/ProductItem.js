import Card from '../UI/Card';
import classes from './ProductItem.module.css';

export default function ProductItem({ title, price, description }) {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3> {title} </h3>

          <div className={classes.price}> ${price.toFixed(2)} </div>
        </header>

        <p> {description} </p>

        <div className={classes.actions}>
          <button> Add to Cart </button>
        </div>
      </Card>
    </li>
  );
}
