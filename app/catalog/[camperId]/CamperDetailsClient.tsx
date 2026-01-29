"use client";

import { Camper } from "@/types/camper";
import { useState } from "react";
import FeaturesReviewsTab from "@/components/FeaturesReviewsTab/FeaturesReviewsTab";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";
import BookingForm from "@/components/BookingForm/BookingForm";
import css from "./CamperDetails.module.css";

type Tab = "features" | "reviews";

type Props = {
  camper: Camper;
  camperId: string;
};

const CamperDetailsClient = ({ camper, camperId }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("features");

  return (
    <>
      <FeaturesReviewsTab
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className={css.contentGrid}>
        <div className={css.leftColumn}>
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>

        <div className={css.rightColumn}>
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </>
  );
};

export default CamperDetailsClient;
