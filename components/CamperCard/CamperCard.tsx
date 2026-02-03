import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <div className={css.header}>
            <div className={css.titleBox}>
              <h2 className={css.cardTitle}>{camper.name}</h2>
  
              <div className={css.priceBox}>
                <p className={css.price}>
                  €{camper.price.toFixed(2)}
                </p>
                <button
                  type="button"
                  className={`${css.heartBotton} ${
                    isFavorite ? css.active : ""
                  }`}
                  onClick={() => onToggleFavorite(camper.id)}
                >
                  <svg className={css.heartIcon} width="25" height="24" aria-label="Add to favorites">
                    <use href="/icons/sprite.svg#icon-heart" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={css.detailsBox}>
                <div className={css.reviews}>
                  <svg className={css.starReting} width="15" height="14">
                    <use href="/icons/sprite.svg#icon-empty-star" />
                  </svg>
                  <span>
                    {camper.rating} ({camper.reviews.length} Reviews)
                  </span>                     
                </div>
                <div className={css.location}>
                  <svg className={css.mapIcon} width="16" height="16">
                    <use href="/icons/sprite.svg#icon-map" />
                  </svg>
                  <span>
                    {camper.location}
                  </span>
                </div>
                
            </div>
          </div>
          <p className={css.textSupport}>{camper.description}</p>

          <ul className={css.cardBadges}>
            <li className={css.badge}>
              <svg className={css.iconBadge}>
                <use href="/icons/sprite.svg#icon-automatic" />
              </svg>
              <span>{camper.transmission}</span> 
            </li>
            <li className={css.badge}>
              <svg className={css.iconBadge}>
                <use href="/icons/sprite.svg#icon-petrol" />
              </svg>
              <span>{camper.engine}</span> 
            </li>
            {camper.kitchen && (
              <li className={css.badge}>
                <svg className={css.iconBadge}>
                  <use href="/icons/sprite.svg#icon-kitchen" />
                </svg>
                <span>Kitchen</span> 
              </li>
            )}
          
            {camper.AC && (
              <li className={css.badge}>
                <svg className={css.iconBadge}>
                  <use href="/icons/sprite.svg#icon-ac" />
                </svg>
                <span>AC</span> 
              </li>
            )}           
            
          </ul>

          <Link href={`/catalog/${camper.id}`} className="buttonAnchor">
            Show more
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
