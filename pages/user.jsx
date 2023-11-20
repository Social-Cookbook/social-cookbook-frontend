import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "../components/profilePicture/profilePicture";
import EditProfileButton from "../components/editButton/editProfileButton";
import SettingsButton from "../components/settingsButton/settingsButton";
import UserInfo from "../components/userInfo/userInfo";
import styles from "../styles/user.module.css";
import PostPreview from "../components/posts/postPreview";

const mockUserData = {
  userName: "John Doe",
  profilePictureUrl:
    "https://www.shutterstock.com/image-photo/cooking-culinary-people-concept-happy-600nw-1929876578.jpg",
};

const postInfo = {
  image: "cheesecake.svg",
  title: "New York Style Cheesecake",
  description: "Cheesecake is super cool",
};

export default function User() {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUserData(mockUserData);
  }, []);

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsEditing(true);
  };

  const handleSettingsClick = () => {
    console.log("Settings button clicked");
  };

  return (
    <div>
      <div className={styles.container}>
        <ProfilePicture {...userData} />
        <UserInfo username={mockUserData.userName} />
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
      <div className={styles.posts}>
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
        <PostPreview postInfo={postInfo} />
      </div>
    </div>
  );
}
