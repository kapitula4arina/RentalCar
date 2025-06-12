import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = ({ cars, onReadMore }) => {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <li key={car.id} className={css.item}>
          <CarCard car={car} onReadMore={onReadMore} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
