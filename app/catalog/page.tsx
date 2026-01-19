import { getCampers } from "@/lib/api";
import CamperGridBlock from "@/components/CamperGridBlock/CamperGridBlock";

const CatalogPage = async () => {
  const response = await getCampers();
  const campers = response.items; // ✅ правильно, items є в response

  console.log("campers array?", Array.isArray(campers)); // має бути true
  console.log("campers:", campers);

  return (
    <main>
      {campers.length > 0 ? (
        <CamperGridBlock campers={campers} />
      ) : (
        <p>No campers found.</p>
      )}
    </main>
  );
};

export default CatalogPage;
