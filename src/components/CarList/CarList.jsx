import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = ({ cars }) => {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <li key={car.id} className={css.item}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarList;
