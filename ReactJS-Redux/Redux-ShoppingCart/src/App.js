import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

export default function App() {
  const showCart = useSelector((state) => state.ui.cartOpen); 

  return (
    <Layout>
      {showCart && <Cart />}

      <Products />
    </Layout>
  );
}
