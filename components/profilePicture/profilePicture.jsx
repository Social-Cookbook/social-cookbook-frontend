import React from "react";
import styles from "./profilePicture.module.css";

const ProfilePicture = ({ username, profile_picture }) => {
  let defaultProfilePicture = "default_profile_picture.webp";

  return (
    <div className={styles.profilepicture}>
      <img
        src={profile_picture || defaultProfilePicture}
        alt={`Profile picture of ${username}`}
        className={styles.profilepicture}
      />
    </div>
  );
};

export default ProfilePicture;
