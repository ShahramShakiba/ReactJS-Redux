import ProductItem from './ProductItem';
import classes from './Products.module.css';

const bookShelves = [
  {
    id: 'b1',
    price: 15.99,
    title: 'The Great Gatsby',
    description: 'A classic novel about the American Dream',
  },
  {
    id: 'b2',
    price: 9.99,
    title: 'Pride and Prejudice',
    description: 'A romantic novel by Jane Austen',
  },
  {
    id: 'b3',
    price: 11.25,
    title: 'The Catcher in the Rye',
    description: 'A novel about teenage angst and alienation',
  },
  {
    id: 'b4',
    price: 10.99,
    title: 'Lord of the Flies',
    description: 'A novel exploring the dark side of human nature',
  },
];

export default function Products() {
  return (
    <section className={classes.products}>
      <h2> Buy Your Favorite Book </h2>

      <ul>
        {bookShelves.map((book) => (
          <ProductItem
            key={book.id}
            id={book.id}
            title={book.title}
            price={book.price}
            description={book.description}
          />
        ))}
      </ul>
    </section>
  );
}
