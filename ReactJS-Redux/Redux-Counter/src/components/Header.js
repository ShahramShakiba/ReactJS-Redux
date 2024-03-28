import { authActions } from '../Store/authSlice';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      {!isAuth && <h1> Redux </h1>}

      {isAuth && (
        <>
          <h1> Redux Authentication </h1>

          <nav>
            <ul>
              <li>
                <a href="/"> My Products </a>
              </li>

              <li>
                <a href="/"> My Sales </a>
              </li>

              <li>
                <button onClick={handleLogout}> Logout </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
