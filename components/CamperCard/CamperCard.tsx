import { Camper } from "@/types/camper";
import Image from "next/image";
import Link from "next/link";
import css from "@/components/CamperCard/CamperCard.module.css"


type CamperCardProps = {
    camper: Camper;
}

const CamperCard = ({ camper }: CamperCardProps) => {
    const camperImage = 
        camper.gallery[0]?.original || camper.gallery[0].thumb || "";

    return (
        <div className={css.camperCard}>
            <Image 
                src={camperImage} 
                alt={camper.name} 
                width={292} 
                height={320}
                className={css.camperImage} 
            />
        </div>
    )

}

export default CamperCard;