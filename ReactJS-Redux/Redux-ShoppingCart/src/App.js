import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './Store/uiSlice';
import Notification from './components/UI/Notification';

let isInitial = true;

export default function App() {
  //return the Data"cartOpen" which we wanna use in this component
  const showCart = useSelector((state) => state.ui.cartOpen);
  const cart = useSelector((state) => state.cart);
  //sets up a subscription to redux | when redux-store changed, this component will be re-executed | we will get the latest state

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Loading...',
          message: 'Please wait while your products are being loaded.',
        })
      );

      try {
        const response = await fetch(
          'https://react-book-shelves-default-rtdb.firebaseio.com/cart.json',
          {
            //overwriting existing-data or creating a new one if it doesn't exist yet
            method: 'PUT',
            body: JSON.stringify(cart),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Sending Cart Data Failed.');
        }

        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Your cart has been saved.',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error Saving Cart',
            message: error.message,
          })
        );
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}

        <Products />
      </Layout>
    </>
  );
}
