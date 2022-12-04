import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../Hooks/useTitle";

const EditReview = () => {
  const [rating, setRating] = useState(1);
  const review = useLoaderData();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

  const handleEditReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const editedReview = {
      message,
      currentDate,
      currentTime,
      rating,
    };

    fetch(`https://lara-cripton-server.vercel.app/editReviews/${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Edited successfully");
        }
        form.reset();
      })
      .catch((err) => toast.error(err.message));
  };
  useTitle("Edit Review");
  return (
    <section className="lg:w-2/3 px-5 mx-auto">
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        {review.serviceTitle}
      </h1>
      <form
        onSubmit={handleEditReview}
        className="container flex flex-col mx-auto space-y-12 text-left"
      >
        <fieldset className=" shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3 ">
              <label
                htmlFor="username"
                className="text-sm font-semibold mb-1 block"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={review?.username}
                className="w-full border border-cyan-400 p-3 focus:outline-none"
                readOnly
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="email"
                className="text-sm font-semibold mb-1 block"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                value={review?.email}
                className="w-full border border-cyan-400 p-3 focus:outline-none "
                readOnly
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="message"
                className="text-sm font-semibold mb-1 block"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue = {review?.message}
                className="w-full border border-cyan-400 p-3 focus:outline-none h-36"
                required
              ></textarea>
              <div className="flex items-center">
                <span className="font-bold text-xl mr-4 my-5">Rate Us : </span>
                <div className="rating">
                  <input
                    onClick={() => setRating(1)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-600"
                    defaultChecked
                  />
                  <input
                    onClick={() => setRating(2)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-600"
                  />
                  <input
                    onClick={() => setRating(3)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-600"
                  />
                  <input
                    onClick={() => setRating(4)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-600"
                  />
                  <input
                    onClick={() => setRating(5)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-600"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <button
                  type="submit"
                  className="px-12 py-3 border rounded-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 text-white font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default EditReview;
