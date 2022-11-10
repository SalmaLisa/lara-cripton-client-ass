import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyReviewRow from "../Components/MyReviewRow";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from "sweetalert2";
import { useTitle } from "../Hooks/useTitle";


const MyReviews = () => {
  useTitle("My Review");
  const [reviews, setReviews] = useState([]);
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://lara-cripton-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization:`Bearer ${localStorage.getItem("lara-access-token")}`
      }
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout() 
        }
       return res.json()
      })
      .then((data) => setReviews(data))
    .catch(err=>console.error(err))
  }, [user?.email, logout]);
  if (reviews.length === 0) {
    return (
      <div className="h-screen flex justify-center mt-40 ">
        <h1 className="text-2xl text-red-500 font-semibold my-12 text-center">
          No Reviews Added !
        </h1>
      </div>
    );
  }
  //handle delete review
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to DELETE this review ?");
    if (proceed) {
      fetch(`https://lara-cripton-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Successfully deleted",
            });
            const remainingReview = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReview);
          }
        });
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        You made <span className="text-pink-600">{reviews.length} </span>
        comments on <span className="text-pink-600">Lara Cripton</span>
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto ">
        <table className="table w-full">
          <tbody className="border">
            {reviews.map((review) => (
              <MyReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
              ></MyReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
