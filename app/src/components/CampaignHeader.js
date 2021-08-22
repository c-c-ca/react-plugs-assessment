import React from "react";
import styles from "./CampaignHeader.module.css";

const ICON_SIZE = 80;

const CampaignHeader = ({
  campaign_icon_url,
  campaign_name,
  pay_per_install,
}) => {
  return (
    <div className={styles.CampaignHeader}>
      <img
        className={styles.CampaignIcon}
        src={campaign_icon_url}
        style={{ height: ICON_SIZE, width: ICON_SIZE }}
      />
      <div className={styles.CampaignInfo}>
        <h2 className={styles.CampaignName}>{campaign_name}</h2>
        <h3 className={styles.PayPerInstall}>
          <span className={styles.PayPerInstallCount}>{pay_per_install}</span>{" "}
          per install
        </h3>
      </div>
    </div>
  );
};

export default CampaignHeader;
