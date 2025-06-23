import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/carsOps';
import { setFilters } from '../../redux/filters/filtersSlice';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import CarList from '../../components/CarList/CarList';
import Filters from '../../components/Filters/Filters';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import Loader from '../../components/Loader/Loader';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const filters = useSelector(selectFilters);
  const cars = useSelector(state => state.cars.items);
  const loading = useSelector(state => state.cars.itemsLoading);
  const error = useSelector(state => state.cars.itemsError);
  const totalCars = useSelector(state => state.cars.totalCars);

  useEffect(() => {
    const params = { ...filters, page, limit: 12 };
    dispatch(fetchCars(params));
  }, [dispatch, page, filters]);

  const handleLoadMore = () => setPage(prev => prev + 1);

  const handleFiltersChange = newFilters => {
    dispatch(setFilters(newFilters));
    setPage(1);
  };

  const canLoadMore = cars.length < totalCars;

  return (
    <div className="container">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <Filters onSearch={handleFiltersChange} />
      <CarList cars={cars} />
      {canLoadMore && !loading && (
        <div className={css.loadMoreWrapper}>
          <LoadMoreButton onClick={handleLoadMore} />
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
