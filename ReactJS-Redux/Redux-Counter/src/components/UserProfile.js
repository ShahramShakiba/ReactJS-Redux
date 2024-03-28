import classes from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <main className={classes.profile}>
      <h2> Redux Authentication </h2>

      <p>
        In a Redux authentication setup, the <strong>useSelector</strong> hook
        is used to access the user's authentication status from the store, while
        the&nbsp;
        <strong>useDispatch</strong>&nbsp;hook is used to dispatch actions for
        login and logout functionality.
      </p>
    </main>
  );
}
