import React from "react";
import CampaignHeader from "./CampaignHeader";
import CampaignMediaList from "./CampaignMediaList";
import styles from "./Campaign.module.css";

const Campaign = props => {
  return (
    <div className={styles.Campaign}>
      <CampaignHeader {...props} />
      <CampaignMediaList {...props} />
    </div>
  );
};

export default Campaign;
