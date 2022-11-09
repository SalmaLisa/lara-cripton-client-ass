import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyReviewRow from "../Components/MyReviewRow";
import { AuthContext } from "../Contexts/AuthProvider";
import Swal from 'sweetalert2';
import { useTitle } from "../Hooks/useTitle";

const MyReviews = () => {
  useTitle('My Review')
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  if (reviews.length === 0) {
    return <div className="mb-96">
       <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        You made <span className="text-pink-600">{reviews.length} </span>reviews
        to <span className="text-pink-600">Lara Cripton</span>
      </h1>
    </div>
  }
//handle delete review
const handleDelete = (id) => {
  const proceed = window.confirm('Are you sure to DELETE this review ?')
  if (proceed) {
    fetch(`http://localhost:5000/reviews/${id}`, {
      method:"DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Successfully deleted',  
          })
          const remainingReview = reviews.filter(review => review._id !== id)
          setReviews(remainingReview)
      }
    })
  }
}
  
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        You made <span className="text-pink-600">{reviews.length} </span>comments
        on <span className="text-pink-600">Lara Cripton</span>
      </h1>
      <div className="overflow-x-auto w-11/12 mx-auto ">
        <table className="table w-full">
          <tbody className="border">
            {reviews.map((review) => (
              <MyReviewRow key={review._id} review={review} handleDelete={handleDelete}></MyReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
