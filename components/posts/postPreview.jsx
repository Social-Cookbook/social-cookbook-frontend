import * as React from "react";
import styles from "./postPreview.module.css";
import { useRouter } from "next/router";

export default function PostPreview({ postInfo }) {
  const router = useRouter();

  const onClickHandle = () => {
    router.push("/post?id=" + postInfo._id);
  };

  let default_image = "default_post_image.avif";
  
  return (
    <div className={styles.backgroundCard} onClick={onClickHandle}>
      <img src={postInfo.photoURLs.length > 0 ? postInfo.photoURLs[0] : default_image} className={styles.image} />
      <p className={styles.title}>{postInfo.title}</p>
    </div>
  );
}
