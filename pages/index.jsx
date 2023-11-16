import { useRef, useEffect, useState } from "react";
import { Post } from "../components/post";
import AuthHome from "./auth_home";

export default function Home() {
	return (
		<AuthHome></AuthHome>
	)
}
// 	const [posts, setPosts] = useState([]);

// 	const fetchPosts = async () => {
// 		const resp = await fetch("http://localhost:3000/api/recipe-posts");
// 		const data = await resp.json();
// 		setPosts(data.posts);
// 	};

// 	useEffect(() => {
// 		fetchPosts();
// 	});
	
//   return (
//     <div>
// 		<ul>
// 			{posts.map((post, index) => (
//             	<li key={index}><Post recipe={post}></Post></li>
//         	))}
// 		</ul>
// 	</div>
//   );
