import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />

      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      
      <Counter />
    </>
  );
}
