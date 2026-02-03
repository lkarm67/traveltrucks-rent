import { Filters } from "@/types/filters";
import { CamperFilters } from "@/types/filters";

export const mapFiltersToApi = (filters: Filters): Partial<CamperFilters> => ({
  transmission: filters.transmission || undefined,
  location: filters.location || undefined,
  equipment: {
    AC: filters.AC || undefined,
    kitchen: filters.kitchen || undefined,
    TV: filters.TV || undefined,
    bathroom: filters.bathroom || undefined,
  },
  form: filters.form || undefined,
});
