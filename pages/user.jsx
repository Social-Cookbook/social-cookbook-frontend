import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "../components/profilePicture/profilePicture";
import EditProfileButton from "../components/editButton/editProfileButton";
import SettingsButton from "../components/settingsButton/settingsButton";
import UserInfo from "../components/userInfo/userInfo";

const mockUserData = {
  userName: "John Doe",
  profilePictureUrl:
    "https://www.shutterstock.com/image-photo/cooking-culinary-people-concept-happy-600nw-1929876578.jpg",
};

export default function User() {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUserData(mockUserData);
  }, []);

  const handleEditClick = () => {
    // Handle button click
    console.log("Edit button clicked");
    setIsEditing(true);
  };

  const handleSettingsClick = () => {
    console.log("Settings button clicked");
  };

  return (
    <div>
      <ProfilePicture {...userData} />
      {isEditing ? (
        <div>
          <p>Edit Profile Form</p>
        </div>
      ) : (
        <EditProfileButton onClick={handleEditClick} />
      )}
      <SettingsButton onClick={handleSettingsClick} />
      <UserInfo username={mockUserData.userName}/>
    </div>
  );
}
