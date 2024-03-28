import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

export default function App() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}
