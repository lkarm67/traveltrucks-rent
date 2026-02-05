import { Filters, CamperFilters, ApiForm } from "@/types/filters";

// Фронт → бекенд (camelCase для MockAPI)
const formMap: Partial<Record<Filters["form"], ApiForm>> = {
  van: "panelTruck",
  fully_integrated: "fullyIntegrated",
  alcove: "alcove",
};

// Маппінг локації: будь-яке місто → "Ukraine, Місто"
const mapLocationToBackend = (location: string) => {
  if (!location) return undefined;
  const trimmed = location.trim();
  return trimmed.includes("Ukraine") ? trimmed : `${trimmed}, Ukraine`;
};

export const mapFiltersToApi = (filters: Filters): CamperFilters => ({
  transmission: filters.transmission || undefined,
  location: mapLocationToBackend(filters.location),
  ...(filters.form ? { form: formMap[filters.form] } : {}),
  ...(filters.AC ? { AC: true } : {}),
  ...(filters.kitchen ? { kitchen: true } : {}),
  ...(filters.TV ? { TV: true } : {}),
  ...(filters.bathroom ? { bathroom: true } : {}),
});
