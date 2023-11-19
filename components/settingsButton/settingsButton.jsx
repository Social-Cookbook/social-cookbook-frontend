import React from "react";
import styles from "./settingsButton.module.css";

const SettingsButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img
        src="./Settings Icon.svg"
        alt="Button Image"
        className={styles.image}
      />
    </button>
  );
};

export default SettingsButton;
