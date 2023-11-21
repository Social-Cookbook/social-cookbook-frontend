import React from "react";
import styles from "./counter.module.css";


const Counter = ({caption, count}) => {
  const pad_count = (count) => {
    if (count < 0) {
      return "00";
    }
    if (count < 10) {
      return "0".concat(count.toString());
    } else {
      return count.toString();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.number}>{pad_count(count)}</p>
      </div>
      <p className={styles.caption}> {caption} </p>
    </div>
  );
};

export default Counter;
