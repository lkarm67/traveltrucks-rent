import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";

type CamperCardProps = {
  camper: Camper;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  isFirst?: boolean;
};

const CamperCard = ({
  camper,
  isFavorite,
  onToggleFavorite,
  isFirst = false,
}: CamperCardProps) => {
  return (
    <div className={css.camperCard}>
      <div className={css.cardContent}>
        <div className={css.imageWrapper}>
          {camper.gallery.length > 0 ? (
            <Image
              src={camper.gallery[0].original}
              alt={camper.name}
              fill
              sizes="(max-width: 768px) 100vw, 292px"
              className={css.image}
              priority={isFirst}
            />
          ) : (
            <div className={css.noImage}>No image</div>
          )}
        </div>

        <div className={css.infoBlock}>
          <div className={css.titleBox}>
            <h2 className={css.cardTitle}>{camper.name}</h2>

            <div className={css.priceBox}>
              <p className={css.price}>
                €{camper.price.toFixed(2)}
              </p>

              <button
                type="button"
                className={`${css.favoriteBotton} ${
                  isFavorite ? css.active : ""
                }`}
                onClick={() => onToggleFavorite(camper.id)}
              >
                <svg className={css.heartIcon} width="25" height="24">
                  <use href="/icons/sprite.svg#icon-black-heart" />
                </svg>
              </button>
            </div>
          </div>

          <p>{camper.location}</p>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
