import React, { useEffect, useState } from "react";

import { Post } from "../components/post";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const request = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        };
        const response = await fetch(
          "http://localhost:3000/api/recipe-posts/followingposts/",
          request
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setPosts(data.postList);
      } catch (error) {
        console.error("Fetching posts failed:", error);
        // Optionally set state here to show an error message to the user.
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <div className="mt-32">
        {posts &&
          posts.map((post, index) => <Post key={index} recipe={post} />)}
      </div>
    </div>
  );
};

export default PostsPage;
