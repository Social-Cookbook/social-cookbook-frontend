import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "../components/profilePicture/profilePicture";
import EditProfileButton from "../components/editButton/editProfileButton";
import SettingsButton from "../components/settingsButton/settingsButton";
import UserInfo from "../components/userInfo/userInfo";
import styles from "../styles/user.module.css";
import PostPreview from "../components/posts/postPreview";

export default function User() {
  
  const userId = '654ace32c936941e29ba7227' // replace this with current user's userId

  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/userpage/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Fetching user information failed:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  });

  const handleEditClick = () => {
    console.log("Edit button clicked");
    // setIsEditing(true);
  };

  const handleSettingsClick = () => {
    console.log("Settings button clicked");
  };

  const posts = userData.posts || []

  return (
    <div>
      <div className={styles.container}>
        <ProfilePicture {...userData} />
        <UserInfo {...userData} />
        <div className={styles.buttons}>
          {isEditing ? (
            <div>
              <p>Edit Profile Form</p>
            </div>
          ) : (
            <EditProfileButton onClick={handleEditClick} />
          )}
          <SettingsButton onClick={handleSettingsClick} />
        </div>
      </div>
      <ul className={styles.posts}>
        {posts.map((postInfo, index) => (
          <li key={index}>
            <PostPreview postInfo={postInfo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
