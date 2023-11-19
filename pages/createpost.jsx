import { useRef } from "react";

export default function CreatePost() {
  const title = useRef(null);
  const images = useRef(null);
  const desc = useRef(null);
  const ingredients = useRef(null);
  const steps = useRef(null);
  const price = useRef(null);
  const hours = useRef(null);
  const mins = useRef(null);

  const callUpload = async () => {
    const imageFiles = images.current.files;
    const formData = new FormData();
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("images[]", imageFiles[i]);
    }
    const fileUpload = {
      method: "POST",
      body: formData,
    };
    const resp = await fetch(
      "http://localhost:3000/api/recipe-posts/upload",
      fileUpload,
    );
    const data = await resp.json();
    return data;
  };

  const callCreatePost = async () => {
    const result = await callUpload();
    const titleVal = title.current.value;
    const descVal = desc.current.value;
    const stepsArray = steps.current.value.split("/");
    const ingredientArray = ingredients.current.value.split(", ");
    const priceVal = price.current.value;
    const photoURLs = result.urls;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleVal,
        description: descVal,
        steps: stepsArray,
        ingredients: ingredientArray,
        totalPrice: priceVal,
        photoURLs: photoURLs,
      }),
    };
    const respPost = await fetch(
      "http://localhost:3000/api/recipe-posts/create",
      requestOptions,
    );
  };

  const onCreatePost = () => {
    callCreatePost();
  };

  return (
    <div className="flex flex-col m-10">
      <h1 className="ml-7 mt-5 font-bold text-3xl">Create a New Post</h1>
      <form className="flex flex-col" action="onSubmit">
        <div className="flex flex-row m-5">
          <div className="container flex flex-col p-10">
            <label className="font-semibold" for="title">
              Title
            </label>
            <input
              className="drop-shadow-md rounded-lg px-2 py-1 mt-1"
              id="title"
              ref={title}
              type="text"
            ></input>
            <label className="mt-5 font-semibold" for="images">
              Insert Image(s)
            </label>
            <input
              className="mt-1"
              type="file"
              id="images"
              multiple
              ref={images}
              accept="image/*"
            ></input>
            <label for="description" className="mt-5 font-semibold">
              Description
            </label>
            <textarea
              className="drop-shadow-md rounded-lg h-32 p-2 mt-1 resize-none"
              ref={desc}
              id="description"
              type="text"
              maxLength="250"
              placeholder="Max Characters: 250"
            ></textarea>
            <label for="ingredients" className="mt-5 font-semibold">
              Ingredients
            </label>
            <input
              className="mt-1 drop-shadow-md rounded-lg px-2 py-1"
              type="text"
              ref={ingredients}
              id="ingredients"
              placeholder="ex. 3 eggs, 1/2 cup milk"
            ></input>
          </div>
          <div className="container flex flex-col py-10 pl-10">
            <label for="steps" className="font-semibold">
              Steps
            </label>
            <textarea
              className="drop-shadow-md rounded-lg h-44 p-2 mt-1 resize-none"
              id="steps"
              ref={steps}
              type="text"
              placeholder="ex. Preheat oven./Mix dry ingredients."
            ></textarea>
            <div className="container flex flex-row place-content-center mt-12">
              <label className="font-semibold" for="price">
                Price:
              </label>
              <input
                className="drop-shadow-md rounded-lg w-24 ml-2 px-2 py-1"
                ref={price}
                id="price"
                type="number"
              ></input>
              <label className="font-semibold ml-12">Cook Time:</label>
              <input
                className="drop-shadow-md rounded-lg w-20 ml-2 px-2 py-1"
                ref={hours}
                id="hours"
                type="number"
                disabled
              ></input>
              <p className="ml-2">hour(s)</p>
              <input
                className="drop-shadow-md rounded-lg w-20 ml-2 px-2 py-1"
                ref={mins}
                id="minutes"
                type="number"
                disabled
              ></input>
              <p className="ml-2">minute(s)</p>
            </div>
            <div className="container flex flex-row mt-8 place-content-center">
              <label className="font-semibold" for="calories">
                Calories:
              </label>
              <input
                className="drop-shadow-md rounded-lg w-1/4 ml-2 px-2 py-1"
                id="calories"
                type="number"
                disabled
              ></input>
              <label for="servings" className="font-semibold ml-12">
                Servings:
              </label>
              <input
                className="drop-shadow-md rounded-lg w-20 ml-2 px-2 py-1"
                id="servings"
                type="number"
                disabled
              ></input>
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-row mb-10 justify-center">
        <button
          className="m-8 p-1 text-lg bg-red-300 rounded-full w-1/6 h-12 justify-self-center"
          onClick={onCreatePost}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
