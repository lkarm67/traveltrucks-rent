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

export type CamperFilters = {
  location?: string;
  transmission?: "manual" | "automatic";
  engine?: "diesel" | "petrol" | "hybrid";
  equipment?: {
    AC?: boolean;
    kitchen?: boolean;
    TV?: boolean;
    bathroom?: boolean;
  };
  form?: string;
};

