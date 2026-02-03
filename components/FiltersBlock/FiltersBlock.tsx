"use client";

import { useCamperStore } from "@/lib/store";
import css from "./FiltersBlock.module.css";

const FiltersBlock = () => {
  const { filters, setFilters, loadCampers } = useCamperStore();

  return (
    <div className={css.filtersContainer}>
      <div>
        <label htmlFor="location">
          <div className={css.locationLabel}>
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
          Location
        </label>
      </div>
      <p className={css.filtersText}>Filters</p>
      <div className={css.equipmentFilters}>
        <h3 className={css.filtersTitle}>Vehicle equipment</h3>
        <hr className={css.devider} />
        <button
          className={filters.AC ? css.active : css.filtersBtn}
          onClick={() => setFilters({ AC: !filters.AC })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-ac" />
          </svg>
          <span>AC</span>
        </button>
        <button
          className={filters.transmission === "automatic" ? css.active : css.filtersBtn}
          onClick={() => setFilters({ transmission: filters.transmission === "automatic" ? "" : "automatic" })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-automatic" />
          </svg>
          <span>Automatic</span>
        </button>
        <button
          className={filters.kitchen ? css.active : css.filtersBtn}
          onClick={() => setFilters({ kitchen: !filters.kitchen })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-kitchen" />
          </svg>
          <span>Kitchen</span>
        </button>
        <button
          className={filters.TV ? css.active : css.filtersBtn}
          onClick={() => setFilters({ TV: !filters.TV })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-tv" />
          </svg>
          <span>TV</span>
        </button>
        <button
          className={filters.bathroom ? css.active : css.filtersBtn}
          onClick={() => setFilters({ bathroom: !filters.bathroom })}
        >
          <svg className={css.filterIcon} width="32" height="32">
            <use href="/icons/sprite.svg#icon-bathroom" />
          </svg>
          <span>Bathroom</span>
        </button>
      </div>

      <div className={css.typesFilters}>
        <h3 className={css.filtersTitle}>Vehicle type</h3>
        <hr className={css.devider} />
        <button
          className={filters.form === "van" ? css.active : css.filtersBtn}
          onClick={() => setFilters({ form: "van" })}
        >
          <span>Van</span>
        </button>
        <button
          className={filters.form === "fully_integrated" ? css.active : css.filtersBtn}
          onClick={() => setFilters({ form: "fully_integrated" })}
        >
          <span>Fully Integrated</span>
        </button>
        <button
          className={filters.form === "alcove" ? css.active : css.filtersBtn}
          onClick={() => setFilters({ form: "alcove" })}
        >
          <span>Alcove</span>
        </button>
      </div>

      <button
        type="button"
        className={css.searchBtn}
        onClick={loadCampers}
      >
        Search
      </button>
    </div>
  );
};

export default FiltersBlock;
