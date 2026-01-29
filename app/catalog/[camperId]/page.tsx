import { getCamperById } from "@/lib/api";
import CamperItem from "@/components/CamperItem/CamperItem";
import CamperDetailsClient from "./CamperDetailsClient";

const CamperDetailsPage = async ({ params }: { params: Promise<{ camperId: string }> }) => {
  const { camperId } = await params; 
  const camper = await getCamperById(camperId);

  if (!camper) return <p>Camper not found</p>;

  return (
    <>
      <CamperItem item={camper} />
      <CamperDetailsClient camper={camper} camperId={camperId} />
    </>
  );
};


export default CamperDetailsPage;
