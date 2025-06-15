import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOps';
import CarList from '../../components/CarList/CarList';
import Filters from '../../components/Filters/Filters';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import css from './CatalogPage.module.css';
import Loader from '../../components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({}); // тримаємо фільтри

  const cars = useSelector(state => state.cars.items);
  const loading = useSelector(state => state.cars.itemsLoading);
  const error = useSelector(state => state.cars.itemsError);
  const totalCars = useSelector(state => state.cars.totalCars);

  useEffect(() => {
    const params = { ...filters, page, limit: 12 };
    dispatch(fetchCars(params));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleFiltersChange = newFilters => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleReadMore = car => {};

  const canLoadMore = cars.length < totalCars;

  return (
    <div className="container">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <Filters onSearch={handleFiltersChange} />
      <CarList cars={cars} onReadMore={handleReadMore} />
      {canLoadMore && !loading && (
        <div className={css.loadMoreWrapper}>
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
