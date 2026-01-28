import { getCamperById } from "@/lib/api";
import CamperItem from "@/components/CamperItem/CamperItem";
import FeaturesReviewsTab from "@/components/FeaturesReviewsTab/FeaturesReviewsTab";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./CamperDetails.module.css";
import { 
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

type CamperDetailsProps = {
  params: Promise<{ camperId: string }>;
};

const CamperDetails = async ({ params }: CamperDetailsProps) => {
  const { camperId } = await params; 
  const camper = await getCamperById(camperId);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
  });

  return (
    <div>
      <CamperItem item={camper} />  {/* server component */}

      <HydrationBoundary state={dehydrate(queryClient)}>
        <FeaturesReviewsTab />  {/* client component */}
      </HydrationBoundary>

      <div className={css.contentGrid}>
        <div className={css.leftColumn}>
          <Features camper={camper} />       {/* server component */}
          <Reviews reviews={camper.reviews} />    {/* server component */}
        </div>

        <div className={css.rightColumn}>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <BookingForm camperId={camperId} />  {/* client component */}
          </HydrationBoundary>
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
