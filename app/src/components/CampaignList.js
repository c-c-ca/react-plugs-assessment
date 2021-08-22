import React from "react";
import Campaign from "./Campaign";
import styles from "./CampaignList.module.css";

const CampaignList = ({ campaigns }) => (
  <div className={styles.CampaignList}>
    {campaigns.map(({ id, ...campaignProps }) => (
      <Campaign key={id} {...campaignProps} />
    ))}
  </div>
);

export default CampaignList;
