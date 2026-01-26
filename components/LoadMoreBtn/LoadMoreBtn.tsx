import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
  disabled?: boolean;
};

const LoadMoreBtn = ({ onClick, disabled }: LoadMoreBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={css.loadMoreButton}
    >
      {disabled ? "Loading..." : "Load more"}
    </button>
  );
};

export default LoadMoreBtn;
