import classes from './Notification.module.css';

export default function Notification({ status, title, message }) {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2> {title} </h2>
      <p> {message} </p>
    </section>
  );
}
