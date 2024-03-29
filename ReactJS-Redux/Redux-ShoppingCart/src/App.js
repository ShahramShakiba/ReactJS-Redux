import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';

export default function App() {
  //return the Data"cartOpen" which we wanna use in this component
  const showCart = useSelector((state) => state.ui.cartOpen);
  const cart = useSelector((state) => state.cart);
  //sets up a subscription to redux | when redux-store changed, this component will be re-executed | we will get the latest state

  useEffect(() => {
    fetch('https://react-book-shelves-default-rtdb.firebaseio.com/cart.json', {
      //overwriting existing-data or creating a new one if it doesn't exist yet
      method: 'PUT',
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}

      <Products />
    </Layout>
  );
}
