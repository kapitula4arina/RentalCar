import css from './CarCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/favoritesSlice';

const Divider = () => <span className={css.divider}></span>;

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
  const city =
    addressParts.length >= 3 ? addressParts[addressParts.length - 2] : '';
  const country =
    addressParts.length >= 3 ? addressParts[addressParts.length - 1] : '';

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={img} alt={`${brand} ${model}`} className={css.image} />
        <button className={css.favoriteButton} onClick={handleToggleFavorite}>
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
        <div className={css.firstLine}>
          <span>
            <span>{brand} </span>
            <span className={css.model}>{model}</span>
            <span>, {year}</span>
          </span>
          <span className={css.price}>${rentalPrice}</span>
        </div>

        <p className={css.secondLine}>
          <span>{city}</span>
          <Divider />
          <span>{country}</span>
          <Divider />
          <span>{rentalCompany}</span>
        </p>

        <p className={css.thirdLine}>
          <span>{capitalizeType(type)}</span>
          <Divider />
          <span>{mileage.toLocaleString()} km</span>
        </p>

        <button
          className={css.buttonCard}
          onClick={() => navigate(`/catalog/${id}`)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CarCard;
