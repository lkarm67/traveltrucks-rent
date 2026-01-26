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
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
      try {
        setIsLoading(true);

        const response = await getCampers(page);

        setCampers(prev => {
          const newCampers = response.items.filter(
            camper => !prev.some(p => p.id === camper.id)
          );
          return [...prev, ...newCampers];
        });

        setTotal(response.total);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampers();
  }, [page]);


  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const hasMore = campers.length < total;

  return (
    <div className={css.catalogPage}>  
      <aside className={css.sidebar}>
          
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
            onClick={handleLoadMore}
            disabled={isLoading}
          />
        )}



      </section>
    </div>  
  );
};

export default CatalogPage;
