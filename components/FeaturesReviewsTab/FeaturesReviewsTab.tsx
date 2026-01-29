// FeaturesReviewsTab.tsx
"use client";

import css from "./FeaturesReviewsTab.module.css";

type Tab = "features" | "reviews";

type Props = {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
};

const FeaturesReviewsTab = ({ activeTab, onChange }: Props) => {
  return (
    <div className={css.tabs}>
      <div className={css.titles}>
        <button
          className={`${css.tabBtn} ${activeTab === "features" ? css.active : ""}`}
          onClick={() => onChange("features")}
        >
          Features
        </button>

        <button
          className={`${css.tabBtn} ${activeTab === "reviews" ? css.active : ""}`}
          onClick={() => onChange("reviews")}
        >
          Reviews
        </button>
      </div>

      <hr className={css.devider}/>
        
    </div>
  );
};

export default FeaturesReviewsTab;
