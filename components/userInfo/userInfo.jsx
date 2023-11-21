import React from "react";
import styles from "./userInfo.module.css";
import Counter from "./counter/counter";
import Username from "./username/username";

const UserInfo = ({ username, num_posts, num_followers, num_following }) => {

  const posts = {
    caption: "Posts",
    count: num_posts || 0,
  };
  const followers = {
    caption: "Followers",
    count: num_followers || 0,
  };
  const following = {
    caption: "Following",
    count: num_following || 0,
  };

  return (
    <div className={styles.container}>
      <Username username={username} />
      <div className={styles.counters}>
        <Counter {...posts} />
        <Counter {...followers} />
        <Counter {...following} />
      </div>
    </div>
  );
};

export default UserInfo;
