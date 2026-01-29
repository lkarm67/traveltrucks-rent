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
};

const CamperDetailsClient = ({ camper }: Props) => {
  const [activeTab, setActiveTab] = useState<Tab>("features");

  return (
    <div className={css.camperDetailsWrapper}>
      <FeaturesReviewsTab
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className={css.contentGrid}>
        <div className={css.leftColumn}>
          {activeTab === "features" && <Features camper={camper} />}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>

        <aside className={css.rightColumn}>
          <BookingForm camper={camper} />
        </aside>
      </div>
    </div>

  );
};

export default CamperDetailsClient;
