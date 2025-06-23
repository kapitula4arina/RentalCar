import css from './CarCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/favoritesSlice';

const Divider = () => <span className={css.divider} aria-hidden="true"></span>;

const capitalizeType = word => {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const CarCard = ({ car }) => {
  const {
    id,
    brand,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    address,
    type,
    mileage,
  } = car;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.includes(id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const addressParts = address.split(',').map(part => part.trim());
  const city = addressParts.at(-2) || '';
  const country = addressParts.at(-1) || '';

  return (
    <article className={css.card}>
      <div className={css.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={css.image} />
        <button
          type="button"
          className={css.favoriteButton}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            width="16"
            height="16"
            className={`${css.icon} ${isFavorite ? css.active : css.disabled}`}
          >
            <use
              href={`/icons.svg#${isFavorite ? 'icon-active-heart' : 'icon-disabled-heart'}`}
            ></use>
          </svg>
        </button>
      </div>

      <div className={css.content}>
        <header className={css.firstLine}>
          <h2 className={css.title}>
            {brand} <span className={css.model}>{model}</span>, {year}
          </h2>
          <span className={css.price}>${rentalPrice}</span>
        </header>

        <p className={css.secondLine}>
          <span>{city}</span>
          <Divider />
          <span>{country}</span>
          <Divider />
          <span>{rentalCompany}</span>
        </p>

        <ul className={css.thirdLine}>
          <li>{capitalizeType(type)}</li>
          <li>
            <Divider />
          </li>
          <li>{mileage.toLocaleString()} km</li>
        </ul>

        <button
          type="button"
          className={css.buttonCard}
          onClick={() => navigate(`/catalog/${id}`)}
          aria-label={`Read more about ${brand} ${model}`}
        >
          Read more
        </button>
      </div>
    </article>
  );
};

export default CarCard;
