import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Post } from "../components/post";

const PostPage = () => {
  const [post, setPost] = useState([]);
  const searchParams = useSearchParams();
  const postid = searchParams.get("id");

  useEffect(() => {
    const fetchPosts = async () => {
      if (!postid) {
        return;
      }
      try {
        const singleURL = `http://localhost:3000/api/recipe-posts/${postid}`;
        console.log(singleURL);
        const response = await fetch(singleURL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Fetching posts failed:", error);
      }
    };

    fetchPosts();
  }, [postid]);

  return <div>{post && post.photoURLs && <Post recipe={post}></Post>}</div>;
};

export default PostPage;
