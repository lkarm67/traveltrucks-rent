export type Transmission = "automatic" | "manual" | "";

export type VehicleForm = "van" | "fully_integrated" | "alcove" | "";

export interface Filters {
  location: string;
  transmission: Transmission;
  form: VehicleForm;

  AC: boolean;
  kitchen: boolean;
  TV: boolean;
  bathroom: boolean;
}
// Тип для API
export type ApiForm = "panelTruck" | "fullyIntegrated" | "alcove";

export type CamperFilters = {
  location?: string;
  transmission?: "manual" | "automatic";
  form?: ApiForm;
  AC?: true;
  kitchen?: true;
  TV?: true;
  bathroom?: true;
};


