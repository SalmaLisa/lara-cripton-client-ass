import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { HiOutlineArrowRight } from "react-icons/hi";
import DisplayReview from "./DisplayReview";

const AddReview = ({ service }) => {
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);


  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  const postTime = date.getTime();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

  useEffect(() => {
    fetch(`https://lara-cripton-server.vercel.app/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [service._id]);

  const handleAddReview = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const username = form.username.value;
    const image = form.image.files[0];
    const message = form.message.value;

  
    const formData = new FormData();
    formData.append("image", image);

    const url =
      "https://api.imgbb.com/1/upload?key=5e0b17f84e048b65c92ff53da170ec8c";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
       
        const review = {
          serviceTitle: service.title,
          serviceId: service._id,
          username,
          email: user?.email,
          photoURL:data.data.display_url,
          message,
          rating,
          currentDate,
          currentTime,
          postTime,
        };

        fetch("https://lara-cripton-server.vercel.app/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                icon: "success",
                title: "Thanks for your review ❤ ",
              });

              fetch(
                `https://lara-cripton-server.vercel.app/reviews/${service._id}`
              )
                .then((res) => res.json())
                .then((data) => setReviews(data));
            }
            
            form.reset();
          })
          .catch((err) => toast.error(err.message));
      });

    
  };

  if (!user?.uid) {
    return (
      <div className="my-12">
        <Link
          to="/login"
          className="text-red-500 hover:text-red-600 text-xl font-semibold flex items-center justify-center cursor-pointer"
        >
          <span>Please login to add a review</span>
          <HiOutlineArrowRight className="mt-1 ml-2"></HiOutlineArrowRight>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <DisplayReview reviews={reviews}></DisplayReview>
      <section className="lg:w-2/3 mx-auto">
        <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
          Inspire me by adding a review
        </h1>
        <form
          onSubmit={handleAddReview}
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
                  defaultValue={
                    user?.displayName ? user.displayName : "Username"
                  }
                  className="w-full border border-cyan-400 p-3 focus:outline-none"
                 
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
                  value={user?.email ? user.email : "Your Email"}
                  className="w-full border border-cyan-400 p-3 focus:outline-none "
                  readOnly
                />
              </div>
              <div>
                <input type="file" name="image" id="" />
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
                  placeholder="Your Message"
                  className="w-full border border-cyan-400 p-3 focus:outline-none h-36"
                  required
                ></textarea>
                <div className="flex items-center">
                  <span className="font-bold text-xl mr-4 my-5">
                    Rate Us :{" "}
                  </span>
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
    </div>
  );
};

export default AddReview;
