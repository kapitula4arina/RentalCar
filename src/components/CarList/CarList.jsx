import CarCard from '../CarCard/CarCard';
import css from './CarList.module.css';

const CarList = ({ cars }) => {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default CarList;
