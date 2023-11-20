import * as React from "react";
import styles from "./postPreview.module.css";

export default function PostPreview({ postInfo }) {
  const onClickHandle = () => {
    console.log(postInfo.description);
  };

  return (
    <div className={styles.backgroundCard} onClick={onClickHandle}>
      <img src={postInfo.image} className={styles.image} />
      <p className={styles.title}>{postInfo.title}</p>
    </div>
  );
}
