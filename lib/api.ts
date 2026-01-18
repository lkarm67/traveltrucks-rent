import axios from "axios";
import { Camper, FilterState } from "@/types/camper";

export type CamperListResponse = {
    campers: Camper[];
    total: number;
}

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const getCampers = async () => {
    const res = await axios.get<CamperListResponse>("/campers");
    return res.data;
}

