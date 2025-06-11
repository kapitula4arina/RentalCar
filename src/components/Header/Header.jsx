import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => (
  <header className={css.header}>
    <div className={clsx('container', css.wrapper)}>
      <nav className={css.nav}>
        <NavLink to="/" className={css.logo}>
          Rental<span className={css.accent}>Car</span>
        </NavLink>
        <div className={css.links}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? css.active : css.link)}
          >
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
