import { Link } from 'react-router-dom';
import css from './NotFound.module.css';
import clsx from 'clsx';

const NotFound = () => {
  return (
    <div className={clsx('container', css.wrapper)}>
      <h1 className={css.code}>404</h1>
      <h2 className={css.title}>Page not found</h2>
      <p className={css.message}>
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className={css.button}>
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
