import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/cars/carsOps';
import CarImageWithForm from '../../components/CarImageWithForm/CarImageWithForm';
import CarMainInfo from '../../components/CarMainInfo/CarMainInfo';
import CarInfoBlock from '../../components/CarInfoBlock/CarInfoBlock';
import css from './CarDetailsPage.module.css';
import Loader from '../../components/Loader/Loader';

const CarDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(state => state.cars.currentCar);
  const loading = useSelector(state => state.cars.currentCarLoading);
  const error = useSelector(state => state.cars.currentCarError);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!car) return null;

  const {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    id: carId,
    mileage,
    description,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = car;

  return (
    <div className={css.container}>
      <CarImageWithForm img={img} />

      <div className={css.infoSection}>
        <CarMainInfo
          car={{
            brand,
            model,
            year,
            id: carId,
            address,
            mileage,
            rentalPrice,
            description,
          }}
        />

        <div className={css.blocksWrapper}>
          <CarInfoBlock
            title="Rental Conditions"
            items={rentalConditions}
            type="default"
          />

          <CarInfoBlock
            title="Car Specifications"
            items={[
              `Year: ${year}`,
              `Type: ${type}`,
              `Fuel Consumption: ${fuelConsumption}`,
              `Engine Size: ${engineSize}`,
            ]}
            type="carSpecifications"
          />

          <CarInfoBlock
            title="Accessories and functionalities"
            items={[...accessories, ...functionalities]}
            type="default"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
