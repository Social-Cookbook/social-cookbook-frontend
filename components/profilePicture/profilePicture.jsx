import React from "react";
import styles from "./profilePicture.module.css";

const ProfilePicture = ({ userName, profilePictureUrl }) => {
  let defaultProfilePicture =
    "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiI4MDQwOTc0L29yaWdpbmFsX2ZmNGYxZjQzZDdiNzJjYzMxZDJlYjViMDgyN2ZmMWFjLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJpbnNpZGUiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9LCJ3ZWJwIjp7InF1YWxpdHkiOjkwfSwianBlZyI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbH19?bc=0";

  return (
    <div className={styles.profilepicture}>
      <img
        src={profilePictureUrl || defaultProfilePicture}
        alt={`Profile picture of ${userName}`}
        className={styles.profilepicture}
      />
    </div>
  );
};

export default ProfilePicture;
