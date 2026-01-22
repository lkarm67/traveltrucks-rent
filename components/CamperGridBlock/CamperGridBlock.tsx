import { Camper } from "@/types/camper";
import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperGridBlock.module.css";

type CamperGridBlockProps = {
  campers: Camper[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
};

const CamperGridBlock = ({ 
  campers,
  favorites,
  onToggleFavorite, 
}: CamperGridBlockProps) => {
  
  return (
    <ul className={css.grid}>
      {campers.map((camper, index) => (
        <li key={camper.id}>
          <CamperCard
            camper={camper}
            isFavorite={favorites.includes(camper.id)}
            onToggleFavorite={onToggleFavorite}
            isFirst={index === 0}
          />
        </li>
      ))}
    </ul>
  );
};

export default CamperGridBlock;
