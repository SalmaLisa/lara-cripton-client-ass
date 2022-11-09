import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyReviewRow from "../Components/MyReviewRow";
import { AuthContext } from "../Contexts/AuthProvider";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        You made <span className="text-pink-600">{reviews.length} </span>reviews
        to <span className="text-pink-600">Lara Cripton</span>
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto ">
        <table className="table w-full">
          <tbody className="border">
            {reviews.map((review) => (
              <MyReviewRow key={review._id} review={review}></MyReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
