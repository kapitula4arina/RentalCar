import { useParams } from 'react-router-dom';

const CarDetailsPage = () => {
  const { id } = useParams();

  return <div>Details for car with ID: {id}</div>;
};

export default CarDetailsPage;
