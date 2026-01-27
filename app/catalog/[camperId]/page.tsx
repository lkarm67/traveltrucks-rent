import { getCamperById } from "@/lib/api";
import CamperItem from "@/components/CamperItem/CamperItem";
import css from "./CamperDetails.module.css";

type CamperDetailsProps = {
  params: Promise<{ camperId: string }>;
};

const CamperDetails = async ({ params }: CamperDetailsProps) => {
  const { camperId } = await params; 

  const camper = await getCamperById(camperId);

  return (
    <div className={css.camperDetailsWrapper}>
      <CamperItem item={camper} />
    </div>
  );
};

export default CamperDetails;
