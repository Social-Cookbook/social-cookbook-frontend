import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Post({ recipe }) {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [index, setIndex] = useState(0);
  let disableNext = false;
  let disablePrev = false;
  if (index <= 0) {
    disablePrev = true;
  }
  if (index >= recipe.photoURLs.length - 1) {
    disableNext = true;
  }

  const onClickPrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const onClickNext = () => {
    if (index < recipe.photoURLs.length - 1) {
      setIndex(index + 1);
    }
  };

  const getUsername = async () => {
    const request = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const respPost = await fetch(
      "" + process.env.NEXT_PUBLIC_API_URL + "recipe-posts/" + recipe._id,
      request
    );
    const postdata = await respPost.json();
    const respUser = await fetch(
      "" + process.env.NEXT_PUBLIC_API_URL + "users/" + postdata.userId,
      request
    );
    const userdata = await respUser.json();
    setUsername(userdata.username);
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className="rounded-md shadow-md bg-slate-50 mb-10 mx-20">
      <div
        id="user"
        className="flex flex-row items-center bg-slate-300 w-full rounded-t-md p-3 cursor-pointer"
        onClick={() => {
          router.push("/user?id=" + username);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="ml-2" id="username">
          {username}
        </p>
      </div>
      <div id="post" className="flex flex-col justify-start m-5 ml-10 p-5">
        <div
          id="recipe"
          className="flex flex-row items-stretch justify-items-stretch mt-3"
        >
          <div className="basis-1/3 ml-7 mr-7">
            <div className="relative">
              {/* use aspect-square to force the picture to be a square or we should consider creating our own ratio based on the size we want for the pictures. */}
              <img
                src={recipe.photoURLs[index] || "default_post_image.avif"}
                className="rounded-xl"
              ></img>
              <div className="absolute top-1/2 left-full">
                <button
                  id="next-button"
                  onClick={onClickNext}
                  disabled={disableNext}
                  className="disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-full">
                <button
                  id="prev-button"
                  onClick={onClickPrevious}
                  disabled={disablePrev}
                  className="disabled:opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="interact-icons"
              className="mt-3 flex flex-row justify-center"
            >
              <div
                className="flex flex-row justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 cursor-pointer p-3"
                onClick={() => {
                  router.push("/post?id=" + recipe._id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <label className="ml-2 cursor-pointer">Like</label>
              </div>
              <div
                className="flex flex-row justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 cursor-pointer p-3 ml-3"
                onClick={() => {
                  const origin =
                    typeof window !== "undefined" && window.location.origin
                      ? window.location.origin
                      : "";
                  toast.success("Post link copied to clipboard", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                  navigator.clipboard.writeText(
                    "" + origin + "/post?id=" + recipe._id
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                <label className="ml-2 cursor-pointer">Share</label>
              </div>
            </div>
          </div>
          <div id="title-block" className="w-1/4 ml-3">
            <h1 className="font-bold ml-3 text-2xl">{recipe.title}</h1>
            <p className="p-3">{recipe.description}</p>
            <div id="stats-row-1 self-end" className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <p className="ml-1">{recipe.totalPrice}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="ml-1">{recipe.cookTime}</p>
            </div>
            <div
              id="stats-row-2 self-end"
              className="flex flex-row items-center mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              <p className="ml-1">{recipe.servings}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>
              <p className="ml-1">{recipe.calories}</p>
            </div>
          </div>
          <div id="ingredients" className="ml-6 w-1/6">
            <p className="font-bold text-lg">Ingredients</p>
            <ul className="list-disc mt-3 ml-8">
              {recipe.ingredients.map((ingredient, index) => (
                <li className="mb-1" key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div id="steps" className="ml-12 w-1/4">
            <p className="font-bold text-lg">Steps</p>
            <ol className="list-decimal mt-3 ml-10">
              {recipe.steps.map((step, index) => (
                <li className="mb-1" key={index}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
