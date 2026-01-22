'use client';

import { useState, useEffect } from "react";
import { getCampers } from "@/lib/api";
import CamperGridBlock from "@/components/CamperGridBlock/CamperGridBlock";
import css from "./catalogPage.module.css";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn";
import { Camper } from "@/types/camper";

const CatalogPage = () => {
  const [campers, setCampers] = useState<Camper[]>([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };


  useEffect(() => {
    const fetchCampers = async () => {
      const response = await getCampers(page);
      setCampers(prev => [...prev, ...response.items]);
    };

    fetchCampers();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className={css.catalogPage}>  
      <aside className={css.sideBar}>

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

        <LoadMoreBtn onClick={handleLoadMore} />


      </section>
    </div>  
  );
};

export default CatalogPage;
