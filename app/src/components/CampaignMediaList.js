import React from "react";
import CampaignMedia from "./CampaignMedia";
import styles from "./CampaignMediaList.module.css";

const CampaignMediaList = ({ medias }) => {
  return (
    <div className={styles.CampaignMediaList}>
      {medias.map((media, i) => (
        <CampaignMedia key={i} {...media} />
      ))}
    </div>
  );
};

export default CampaignMediaList;
