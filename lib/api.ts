import { Camper } from "@/types/camper";

export type GetCampersResponse = {
  items: Camper[];
  total: number;
};


export const getCampers = async (
  page = 1,
  limit = 4
): Promise<GetCampersResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/campers?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch campers");
  return res.json();
};
