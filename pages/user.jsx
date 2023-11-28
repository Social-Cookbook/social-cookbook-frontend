import React from "react";
import { useState, useEffect } from "react";
import ProfilePicture from "../components/profilePicture/profilePicture";
import EditProfileButton from "../components/editButton/editProfileButton";
import UserInfo from "../components/userInfo/userInfo";
import styles from "../styles/user.module.css";
import PostPreview from "../components/posts/postPreview";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function User() {
	const searchParams = useSearchParams();
	const router = useRouter();
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
	const [loading, setLoading] = useState(true);
	const userId = searchParams.get("id") ? searchParams.get("id") : "";

  useEffect(() => {
		setLoading(true);
		const fetchUserData = async () => {
			try {
				const request = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					credentials: 'include',
				};
	
				const response = await fetch('http://localhost:3000/api/users/userpage/' + userId, request);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setUserData(data);
				setLoading(false);
			} catch (error) {
				console.error("Fetching user information failed:", error);
			}
		};

    fetchUserData();
  }, [router]);

  const handleEditClick = () => {
    console.log("Edit button clicked");
    // setIsEditing(true);
  };

  const handleSettingsClick = () => {
    console.log("Settings button clicked");
  };

	const handleFollowClick = async () => {
		console.log("Followed user");
		console.log(userId)
		try {
			const postData_following = {
			  following: userId,
			};

			const postData_follower = {
				followers: userId,
			}
		
			const request_following = {
			  method: 'PUT',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  credentials: 'include',
			  body: JSON.stringify(postData_following),
			};
		
			const response_1 = await fetch('http://localhost:3000/api/following/loggedInUser/', request_following);

			if (!response_1.ok) {
				throw new Error(`HTTP error! status: ${response_1.status}`);
			  }

			const request_follower = {
			  method: 'PUT',
			  headers: {
				'Content-Type': 'application/json',
			  },
			  credentials: 'include',
			  body: JSON.stringify(postData_follower),
			};
		
			const response_2 = await fetch('http://localhost:3000/api/followers/loggedInUser/', request_follower);
		
			if (!response_2.ok) {
			  throw new Error(`HTTP error! status: ${response_2.status}`);
			}
		
			// Handle the response as needed, e.g., update UI based on the follow action
		  } catch (error) {
			console.error("Following user failed:", error);
		  }
	}

  const posts = userData.posts || []

  return (
    <div>
			{!loading && 
				<>
					<div className={styles.container}>
						<ProfilePicture {...userData} />
						<UserInfo {...userData} />
						<div className={styles.buttons}>
							{!userData.is_current_user ? (
								<button onClick={handleFollowClick} className="bg-sky-500 text-white text-xl px-4 font-semibold py-3 rounded-md cursor-pointer h-min hover:bg-sky-600">
									Follow
								</button>
							) : (
								<EditProfileButton onClick={handleEditClick} />
							)}
						</div>
					</div>
					<ul className={styles.posts}>
						{posts.map((postInfo, index) => (
							<li key={index}>
								<PostPreview postInfo={postInfo} />
							</li>
						))}
					</ul>
				</>
			}
    </div>
  );
}
