import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../Store/authSlice';

export default function Auth() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor="email"> Email </label>
            <input type="email" id="email" required />
          </div>

          <div className={classes.control}>
            <label htmlFor="password"> Password </label>
            <input type="password" id="password" required />
          </div>

          <button> Login </button>
        </form>
      </section>
    </main>
  );
}
