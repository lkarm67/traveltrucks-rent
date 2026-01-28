import css from "./Features.module.css";
import { Camper } from "@/types/camper";

type FeaturesProps = {
  camper: Camper;
}

const Features = ({ camper }: FeaturesProps) => {
  return (
    <div className={css.featuresWrapper}>
      <ul className={css.featuresList}>
        <li className={css.badge}>
          <svg className={css.iconBadge}>
            <use href="/icons/sprite.svg#icon-automatic" />
          </svg>
          <span>{camper.transmission}</span> 
        </li>
        {camper.AC && (
          <li className={css.badge}>
            <svg className={css.iconBadge}>
              <use href="/icons/sprite.svg#icon-ac" />
            </svg>
            <span>AC</span> 
          </li>
        )}
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
        {camper.radio && (
          <li className={css.badge}>
            <svg className={css.iconBadge}>
              <use href="/icons/sprite.svg#icon-radio" />
            </svg>
            <span>Radio</span> 
          </li>
        )}
        {camper.TV && (
          <li className={css.badge}>
            <svg className={css.iconBadge}>
              <use href="/icons/sprite.svg#icon-tv" />
            </svg>
            <span>TV</span> 
          </li>
        )}
        {camper.bathroom && (
          <li className={css.badge}>
            <svg className={css.iconBadge}>
              <use href="/icons/sprite.svg#icon-bathroom" />
            </svg>
            <span>Bathroom</span> 
          </li>
        )}
        {camper.refrigerator && (
          <li className={css.badge}>
            <svg className={css.iconBadge}>
              <use href="/icons/sprite.svg#icon-refrigerator" />
            </svg>
            <span>Refrigerator</span> 
          </li>
        )}
        {camper.microwave && (
          <li className={css.badge}>
            <svg className={css.iconsBadge}>
              <use href="/icons/sprite.svg#icon-microwave" />
            </svg>
            <span>Microwave</span> 
          </li>
        )}
        {camper.gas && (
          <li className={css.badge}>
            <svg className={css.iconsBadge}>
              <use href="/icons/sprite.svg#icon-gas" />
            </svg>
            <span>Gas</span> 
          </li>
        )}
        {camper.water && (
          <li className={css.badge}>
            <svg className={css.iconsBadge}>
              <use href="/icons/sprite.svg#icon-water" />
            </svg>
            <span>Water</span> 
          </li>
        )}                
      </ul>
    
      <div className={css.vehicleDetailsWrapper}>
        <h3 className={css.vehicleDetailsTitle}>Vehicle Details</h3>
        <hr className={css.devider}/>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <span>Form</span>
            <span className={css.capitalForm}>{camper.form}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      
      </div>
    </div>
  )
}

export default Features;