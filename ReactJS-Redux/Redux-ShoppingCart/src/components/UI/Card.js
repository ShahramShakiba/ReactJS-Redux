import classes from './Card.module.css';

export default function Card({ children, className }) {
  return (
    <section className={` ${classes.card} ${className ? className : ''} `}>
      {children}
    </section>
  );
}
