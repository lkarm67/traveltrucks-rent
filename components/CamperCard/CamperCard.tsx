import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";

type CamperCardProps = {
  camper: Camper;
};

const CamperCard = ({ camper }: CamperCardProps) => {
  return (
    <div className={css.card}>
      <h2>{camper.name}</h2>
      <p>{camper.location}</p>
      <p>Price: ${camper.price}</p>
      {/* Можна додати фото чи інші деталі */}
    </div>
  );
};

export default CamperCard;
