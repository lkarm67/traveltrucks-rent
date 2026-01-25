import { Camper, CamperReview } from "@/types/camper";
import css from "./CamperReviews.module.css";

type ReviewProps = {
    reviews: CamperReview[];
}

export const Reviews = ({ reviews }: ReviewProps) => {
    const showStars = (rating: number) => {
        const retingNum = Number(rating) || 0;

        return Array.from({ length: 5 }, (_, i) => {
            const iconSvg = 
              i < retingNum
                ? "/icons/sprite.svg#icon-yellow-star"
                : "/icons/sprite.svg#icon-empty-star";

            return (
              <svg
                key={i}
                className={`${css.iconStar} ${
                i < rating ? css.starFilled : css.starEmpty
                }`}
              >
                <use href="/icons/sprite.svg#icon-empty-star" width="15" height="14" />
              </svg>

            );
        });

        if (!reviews || reviews.length === 0) {
          return <p className={css.noReview}>No review is found.</p>        
        }

        return (
            <>
            </>
        )
    }
}