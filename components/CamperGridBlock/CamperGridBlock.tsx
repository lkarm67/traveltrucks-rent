import { Camper } from "@/types/camper";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperGridBlock.module.css";

type CamperGridBlockProps = {
  campers: Camper[];
};

const CamperGridBlock = ({ campers }: CamperGridBlockProps) => {
  return (
    <ul className={css.grid}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperGridBlock;
