import React from "react";
import styles from "./editProfileButton.module.css";

const EditProfileButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Edit Profile
    </button>
  );
};

export default EditProfileButton;
