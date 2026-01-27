import { Camper } from '@/types/camper';
import css from "./CamperItem.module.css";
import Image from "next/image";


type Props = {
  item: Camper;
};

const CamperItem = ({ item }: Props) => {
  return (
    <div className={css.camperItem}>
      <div className={css.titleBox}>
        <h2>{item.name}</h2>
        <div className={css.detailsBox}>
          <div className={css.reviewLocationBox}>
            <div className={css.reviews}>
              <svg className={css.starReting} width="15" height="14">
                <use href="/icons/sprite.svg#icon-empty-star" />
              </svg>
              <span>
                {item.rating} ({item.reviews.length} Reviews)
              </span>                     
            </div>
            <div className={css.location}>
              <svg className={css.mapIcon} width="16" height="16">
                <use href="/icons/sprite.svg#icon-map" />
              </svg>
              <span>
                {item.location}
              </span>
            </div>  
          </div>
          
          <p className={css.price}>
            €{item.price.toFixed(2)}
          </p>                        
        </div>
      </div>
      
      <div className={css.gallery}>
        {item.gallery.map((img, index) => (
          <div key={index} className={css.imageWrapper}>
            <Image
              src={img.original || img.thumb || ""}
              alt={`${item.name} ${index + 1}`}
              fill
              className={css.image}
              sizes="(max-width: 1440px) 292px"
            />
          </div>
        ))}
      </div>
      
      <p className={css.itemDescription}>{item.description}</p>
    </div>
  );
};
 
export default CamperItem;
