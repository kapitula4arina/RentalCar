import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOps';
import CarList from '../../components/CarList/CarList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(state => state.cars.items);
  const loading = useSelector(state => state.cars.loading);
  const error = useSelector(state => state.cars.error);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <CarList cars={cars} />
    </div>
  );
};

export default CatalogPage;
