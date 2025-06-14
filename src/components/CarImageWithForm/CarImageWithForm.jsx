import RentForm from '../RentForm/RentForm';
import css from './CarImageWithForm.module.css';

const CarImageWithForm = ({ img }) => {
  return (
    <div className={css.wrapper}>
      <img src={img} alt="Car" className={css.image} />
      <RentForm />
    </div>
  );
};

export default CarImageWithForm;
