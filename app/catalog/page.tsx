'use client';

import { useEffect } from "react";
import CamperGridBlock from "@/components/CamperGridBlock/CamperGridBlock";
import FiltersBlock from "@/components/FiltersBlock/FiltersBlock";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn";
import Loading from "@/app/loading";
import { useCamperStore } from "@/lib/store";
import css from "./catalogPage.module.css";

const CatalogPage = () => {
  const {
    items: campers,
    favorites,
    toggleFavorite,
    loadCampers,
    loadMore,
    hasMore,
    isLoading,
  } = useCamperStore();

  useEffect(() => {
    loadCampers(1);
  }, [loadCampers]);

  if (isLoading && campers.length === 0) {
    return <Loading />;
  }

  return (
    <div className={css.catalogPage}>
      <aside className={css.sidebar}>
        <FiltersBlock />
      </aside>

      <section className={css.mainCatalog}>
        {campers.length > 0 ? (
          <CamperGridBlock
            campers={campers}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        ) : (
          <p>No campers found.</p>
        )}

        {hasMore && (
          <LoadMoreBtn
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load more"}
          </LoadMoreBtn>
        )}
      </section>
    </div>
  );
};

export default CatalogPage;
