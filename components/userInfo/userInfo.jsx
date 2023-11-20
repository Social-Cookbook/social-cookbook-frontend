import React from "react";
import styles from "./userInfo.module.css";
import Counter from "./counter/counter";
import Username from "./username/username";

const posts = {
  caption: "Posts",
  count: -2,
};
const followers = {
  caption: "Followers",
  count: 69,
};
const following = {
  caption: "Following",
  count: 5,
};

const UserInfo = ({ username }) => {
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
