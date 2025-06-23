import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/cars/carsOps';
import Selectors from '../Selectors/Selectors';
import css from './Filters.module.css';

const Filters = ({ onSearch }) => {
  const dispatch = useDispatch();
  const brands = useSelector(state => state.filters.brands);

  const [make, setMake] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleSearch = () => {
    const params = {};
    if (make?.name) params.brand = make.name;
    if (price?.name) params.rentalPrice = price.name;
    if (mileageFrom) params.minMileage = mileageFrom;
    if (mileageTo) params.maxMileage = mileageTo;
    onSearch(params);
  };

  const brandOptions = brands?.map(brand => ({
    id: crypto.randomUUID(),
    name: brand,
  }));

  const priceOptions = [
    10, 20, 30, 40, 50, 70, 90, 110, 130, 150, 170, 190,
  ].map(p => ({ id: crypto.randomUUID(), name: p }));

  const formatNumber = value => {
    if (!value) return '';
    const number = value.toString().replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleMileageChange = setter => e => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (/^\d*$/.test(rawValue)) {
      setter(rawValue);
    }
  };

  return (
    <div className={css.filters}>
      <div className={css.filterGroup}>
        <label className={css.label}>Car brand</label>
        <Selectors
          arrays={brandOptions}
          selectedValue={make}
          setSelectedValue={setMake}
          chosenValue={make ? make.name : 'Choose a brand'}
        />
      </div>

      <div className={css.filterGroup}>
        <label className={css.label}>Price / 1 hour</label>
        <Selectors
          arrays={priceOptions}
          selectedValue={price}
          setSelectedValue={setPrice}
          chosenValue={price ? `To $${price.name}` : 'Choose a price'}
        />
      </div>

      <div className={css.filterGroup}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageInputs}>
          <div className={css.mileageInputWrapper}>
            <span className={css.mileagePrefix}>From</span>
            <input
              type="text"
              className={css.mileageInput}
              value={formatNumber(mileageFrom)}
              onChange={handleMileageChange(setMileageFrom)}
              inputMode="numeric"
            />
          </div>
          <div className={css.mileageInputWrapper}>
            <span className={css.mileagePrefix}>To</span>
            <input
              type="text"
              className={css.mileageInput}
              value={formatNumber(mileageTo)}
              onChange={handleMileageChange(setMileageTo)}
              inputMode="numeric"
            />
          </div>
        </div>
      </div>

      <button onClick={handleSearch} className={css.searchBtn}>
        Search
      </button>
    </div>
  );
};

export default Filters;
