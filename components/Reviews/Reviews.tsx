import { CamperReview } from "@/types/camper";
import css from "./Reviews.module.css";

type ReviewsProps = {
    reviews: CamperReview[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
    const showStars = (rating: number) => {
      const ratingNum = Number(rating) || 0;

      return (
        <div className={css.stars}>
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`${css.iconStar} ${i < ratingNum ? css.starFilled : css.starEmpty}`}
              width="15"
              height="14"
            >
              <use href="/icons/sprite.svg#icon-empty-star" />
            </svg>
          ))}
        </div>
      );
    };
   
    return (
      <ul className={css.listReviews}>
        {(!reviews || reviews.length === 0) ? (
          <p className={css.noReview}>No review is found.</p>
        ) : (
          reviews.map((review, index) => (
            <li key={index} className={css.itemReview}>
              <div className={css.titleBox}>
                <div className={css.avatar}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>

                <div className={css.nameReview}>
                  <p className={css.name}>{review.reviewer_name}</p>
                  {showStars(review.reviewer_rating)}
                </div>
              </div>

              <p className={css.comment}>{review.comment}</p>
            </li>
          ))
        )}
      </ul>
    );
}

export default Reviews;