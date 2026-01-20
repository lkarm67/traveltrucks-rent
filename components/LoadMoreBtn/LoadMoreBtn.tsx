import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button
      onClick={onClick}
      className={css.loadMoreButton}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
