import { useEffect, useState } from "react";
import { Post } from "../components/post";

export default function Home() {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		const resp = await fetch("http://localhost:3000/api/recipe-posts");
		const data = await resp.json();
		setPosts(data.posts);
	}

	useEffect(() => {
		fetchPosts();
	});

	
  return (
    <div>
		<div className="container flex flex-col">
			<h1 className="ml-7 mt-5 text-2xl">Create a New Post</h1>
			<form className="flex flex-col w-1/2 mb-10 mx-10 mt-5">
				<label for="title">Title</label>
				<input className="drop-shadow-md rounded-lg px-2" id="title" type="text"></input>
				<label for="description" className="mt-5">Description</label>
				<textarea className="drop-shadow-md rounded-lg h-32 p-2" id="description" type="text" placeholder="Max Characters: 250"></textarea>
				<div className="container flex flex-row place-content-center mt-8">
					<label className="font-semibold" for="price">Price:</label>
					<input className="drop-shadow-md rounded-lg w-24 ml-2 px-2" id="price" type="number"></input>
					<label className="font-semibold ml-12">Cook Time:</label>
					<input className="drop-shadow-md rounded-lg w-20 ml-2 px-2" id="hours" type="number"></input>
					<p className="ml-2">hour(s)</p>
					<input className="drop-shadow-md rounded-lg w-20 ml-2 px-2" id="minutes" type="number"></input>
					<p className="ml-2">minute(s)</p>
				</div>
				<div className="container flex flex-row mt-8 place-content-center">
					<label className="font-semibold" for="calories">Calories:</label>
					<input className="drop-shadow-md rounded-lg w-1/4 ml-2 px-2" id="calories" type="number"></input>
					<label for="servings" className="font-semibold ml-12">Servings:</label>
					<input className="drop-shadow-md rounded-lg w-20 ml-2 px-2" id="servings" type="number"></input>
				</div>
				<input className="m-5" type="submit" value="Submit"></input>
			</form>
		</div>
		




		<ul>
			{posts.map((post, index) => (
            	<li key={index}><Post recipe={post}></Post></li>
        	))}
		</ul>
	</div>
  );
}
