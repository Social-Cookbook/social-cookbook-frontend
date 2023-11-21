// pages/posts.jsx

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import { Post } from "../components/post";
import styles from "../styles/PostBoard.module.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/recipe-posts");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error("Fetching posts failed:", error);
      // Optionally set state here to show an error message to the user.
    }
  };

  useEffect(() => {
    fetchPosts();
  });

  return (
    <div className={styles.container}>
      <ul className={styles.postsList}>
        {posts.map((post, index) => (
          <li key={index}>
            <Post recipe={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
