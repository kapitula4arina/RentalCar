import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreButton;
