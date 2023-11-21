// pages/posts.jsx
'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { SearchParams, useSearchParams } from "next/navigation";

import { Post } from "../components/post";
import styles from "../styles/PostBoard.module.css";

function SearchPosts() {
    const searchParams = useSearchParams()
   
    const search = searchParams.get('postid');
    console.log(search);
    // URL -> `/dashboard?postid=my-project`
    // `search` -> 'my-project'
    return search
}

const PostPage = () => {
  const [post, setPost] = useState([]);
  const router = useRouter();
  const postid = SearchPosts();
  console.log(postid);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const fetchPosts = async () => {
    try {
        const singleURL = `http://localhost:3000/api/recipe-posts/${postid}`;
        console.log(singleURL); 
        const response = await fetch(singleURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  
        }
        const data = await response.json();
        setPost(data);
        console.log(data);
    } catch (error) {
      console.error("Fetching posts failed:", error);
      // Optionally set state here to show an error message to the user.
    }
  };

  useEffect(() => {
    fetchPosts();
    //console.log(post);
  }, [postid]);

  const Logout = () => {
    removeCookie("token");
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <button className={styles.logoutButton} onClick={Logout}>
        LOGOUT
      </button>
      <ul className={styles.postsList}>
        
      </ul>
    </div>
  );
};

export default PostPage;
