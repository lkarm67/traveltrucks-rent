import axios from "axios";
import { Camper } from "@/types/camper";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

// api.ts
export const getCampers = async () => {
  const res = await axios.get<Camper[]>("/campers");

  return {
    campers: res.data,
    total: res.data.length,
  };
};


