import css from './CarMainInfo.module.css';

const CarMainInfo = ({ car }) => {
  const { brand, model, year, id, address, mileage, rentalPrice, description } =
    car;

  const formatMileage = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const addressParts = address.split(',').map(part => part.trim());
  const city =
    addressParts.length >= 2 ? addressParts[addressParts.length - 2] : '';
  const country =
    addressParts.length >= 1 ? addressParts[addressParts.length - 1] : '';
  const shortAddress = `${city}, ${country}`;

  return (
    <div className={css.container}>
      <div className={css.topRow}>
        <h2 className={css.title}>
          {brand} {model}, {year}
        </h2>
        <p className={css.id}>Id: {id ? id.slice(0, 4) : 'N/A'}</p>
      </div>

      <div className={css.middleRow}>
        <div className={css.addressBlock}>
          <svg width="16" height="16" className={css.icon}>
            <use href="/icons.svg#icon-location" />
          </svg>
          <span className={css.address}>{shortAddress}</span>
        </div>
        <p className={css.mileage}>Mileage: {formatMileage(mileage)} km</p>
      </div>

      <p className={css.price}>${rentalPrice}</p>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default CarMainInfo;
