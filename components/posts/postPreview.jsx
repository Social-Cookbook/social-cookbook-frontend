import * as React from "react";
import styles from "./postPreview.module.css";

export default function PostPreview({ postInfo }) {
  
  const onClickHandle = () => {
    console.log(postInfo.description);
  };

  let default_image = "default_post_image.png";
  
  return (
    <div className={styles.backgroundCard} onClick={onClickHandle}>
      <img src={postInfo.photoURLs.length > 0 ? postInfo.photoURLs[0] : default_image} className={styles.image} />
      <p className={styles.title}>{postInfo.title}</p>
    </div>
  );
}
