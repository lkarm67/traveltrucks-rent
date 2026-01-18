import { getCampers } from "@/lib/api";

const CatalogPage = async () => {
    const campers = await getCampers();
    console.log("campers", campers);
    return (
        <div>Catalog</div>
    )
} 
export default CatalogPage;