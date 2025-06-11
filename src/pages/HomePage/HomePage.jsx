import { Link } from 'react-router-dom';
import clsx from 'clsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.hero}>
      <div className={clsx('container', css.wrapper)}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalog" className={css.button}>
          View catalog
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
