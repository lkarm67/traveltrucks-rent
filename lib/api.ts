import { Camper } from "@/types/camper";

export type GetCampersResponse = {
  campers: {
    total: number;
    items: Camper[];
  };
};

export const getCampers = async (): Promise<GetCampersResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campers`);
  if (!res.ok) throw new Error("Failed to fetch campers");
  return res.json();
};
