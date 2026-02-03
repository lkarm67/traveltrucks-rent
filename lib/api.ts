import { Camper } from "@/types/camper";
import { CamperFilters } from "@/types/filters";

export type GetCampersResponse = {
  items: Camper[];
  total: number;
};

export const getCampers = async (
  page = 1,
  limit = 4,
  filters?: CamperFilters
) => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    ...(filters && Object.fromEntries(
      Object.entries(filters).filter(([, v]) => v !== undefined)
    )),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campers?${params.toString()}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch campers");
 }

  return res.json();
};


export const getCamperById = async (id: string): Promise<Camper> => {
  console.log("🚐 camperId =", id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campers/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("❌ Fetch failed with status:", res.status);
    throw new Error("Failed to fetch camper");
  }

  return res.json();
};
