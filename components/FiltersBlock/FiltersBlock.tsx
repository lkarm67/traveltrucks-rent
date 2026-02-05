"use client";

import { useCamperStore } from "@/lib/store";
import css from "./FiltersBlock.module.css";

const FiltersBlock = () => {
  const { filters, setFilters, loadCampers } = useCamperStore();

  return (
    <div className={css.filtersContainer}>
      <div className={css.locationBox}>
        <label htmlFor="location" className={css.locationLabel}>
          Location
          <div className={css.inputBox}>
            <svg className={css.mapIcon} width="16" height="16">
              <use href="/icons/sprite.svg#icon-map" />
            </svg>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City"
              value={filters.location}
              onChange={(e) => setFilters({ location: e.target.value })}
              className={css.locationInput}
            />
          </div>
        </label>
      </div>
      <p className={css.filtersText}>Filters</p>
      <div className={css.filtersBox}>
        <h3 className={css.filtersTitle}>Vehicle equipment</h3>
        <hr className={css.devider} />
        <div className={css.bottonsBox}>
        <button
          className={`${css.filtersBtn} ${filters.AC ? css.active : ""}`}
          onClick={() => setFilters({ AC: !filters.AC })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-ac" />
          </svg>
          <span>AC</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.transmission === "automatic" ? css.active : ""}`}
          onClick={() => setFilters({ transmission: filters.transmission === "automatic" ? undefined : "automatic" })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-automatic" />
          </svg>
          <span>Automatic</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.kitchen ? css.active : ""}`}
          onClick={() => setFilters({ kitchen: !filters.kitchen })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-kitchen" />
          </svg>
          <span>Kitchen</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.TV ? css.active : ""}`}
          onClick={() => setFilters({ TV: !filters.TV })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-tv" />
          </svg>
          <span>TV</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.bathroom ? css.active : ""}`}
          onClick={() => setFilters({ bathroom: !filters.bathroom })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-bathroom" />
          </svg>
          <span>Bathroom</span>
        </button>
        </div>
      </div>

      <div className={css.typesBox}>
        <h3 className={css.filtersTitle}>Vehicle type</h3>
        <hr className={css.devider} />
        <div className={css.bottonsBox}>
        <button
          className={`${css.filtersBtn} ${filters.form === "van" ? css.active : ""}`}
          onClick={() =>
            setFilters({
              form: filters.form === "van" ? "" : "van",
            })
          }
        > 
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-bi_grid-1x2" />
          </svg>
          <span>Van</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.form === "fully_integrated" ? css.active : ""}`}
          onClick={() =>
            setFilters({
              form: filters.form === "fully_integrated" ? "" : "fully_integrated",
            })
          }
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-bi_grid-2x2" />
          </svg>
          <span>Fully Integrated</span>
        </button>
        <button
          className={`${css.filtersBtn} ${filters.form === "alcove" ? css.active : ""}`}
          onClick={() =>
            setFilters({
              form: filters.form === "alcove" ? "" : "alcove",
            })
          }
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-bi_grid-3x3" />
          </svg>
          <span>Alcove</span>
        </button>
        </div>
      </div>

      <button
        type="button"
        className="buttonAnchor"
        onClick={() => loadCampers()}
      >
        Search
      </button>
    </div>
  );
};

export default FiltersBlock;
