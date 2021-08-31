import React from "react";
import styles from "./CampaignMedia.module.css";
import { HiDownload, HiLink } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";

const ICON_SIZE = 28;
const ICON_COLOR = "#a9a9a9";

const CampaignMedia = ({
  cover_photo_url,
  download_url,
  tracking_link,
  media_type,
}) => {
  const backgroundImage = `
    url(${cover_photo_url})
`;

  const onClickCopyToClipboard = text => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.CampaignMedia}>
      <div style={{ backgroundImage }} className={styles.CoverPhoto}>
        <div className={styles.CoverPhotoOverlay}>
          {media_type === "video" ? <FaPlay size={ICON_SIZE} /> : null}
        </div>
      </div>
      <div className={styles.MediaIconContainer}>
        <div
          className={[
            styles.MediaIconWrapper,
            styles.MediaIconWrapperLeft,
          ].join(" ")}
        >
          <HiLink
            className={styles.MediaIcon}
            className={styles.CopyOnHover}
            size={ICON_SIZE}
            color={ICON_COLOR}
            onClick={() => {
              onClickCopyToClipboard(tracking_link);
            }}
          />
        </div>
        <div
          className={[
            styles.MediaIconWrapper,
            styles.MediaIconWrapperRight,
          ].join(" ")}
        >
          <a href={download_url} download>
            <HiDownload
              className={styles.MediaIcon}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CampaignMedia;
