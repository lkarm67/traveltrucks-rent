import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper } from "@/types/camper";
import { Filters } from "@/types/filters";
import { initialFilters } from "@/lib/filters";
import { getCampers } from "@/lib/api";
import { mapFiltersToApi } from "@/lib/mapFiltersToApi";

interface CamperStore {
  items: Camper[];
  favorites: string[];
  filters: Filters;
  isLoading: boolean;
  error: string | null;
  page: number;
  total: number;
  hasMore: boolean;

  loadCampers: (page?: number) => Promise<void>;
  loadMore: () => Promise<void>;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
  toggleFavorite: (id: string) => void;
}

export const useCamperStore = create<CamperStore>()(
  persist(
    (set, get) => ({
      items: [],
      favorites: [],
      filters: initialFilters,
      isLoading: false,
      error: null,
      page: 1,
      total: 0,
      hasMore: true,

      loadCampers: async (page = 1) => {
        set({ isLoading: true, error: null });
        try {
          const apiFilters = mapFiltersToApi(get().filters);
          const response = await getCampers(page, 4, apiFilters);

          set(state => ({
            items: page === 1 ? response.items : [...state.items, ...response.items],
            total: response.total,
            page,
            hasMore: page * 4 < response.total,
          }));
        } catch {
          set({ error: "Failed to load campers" });
        } finally {
          set({ isLoading: false });
        }
      },

      loadMore: async () => {
        const nextPage = get().page + 1;
        await get().loadCampers(nextPage);
      },

      setFilters: newFilters =>
        set(() => ({
          filters: { ...get().filters, ...newFilters },
          items: [],
          page: 1,
          hasMore: true,
        })),

      resetFilters: () =>
        set(() => ({
          filters: initialFilters,
          items: [],
          page: 1,
          hasMore: true,
        })),

      toggleFavorite: id =>
        set(state => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter(fav => fav !== id)
            : [...state.favorites, id],
        })),
    }),
    { name: "favorites" }
  )
);
