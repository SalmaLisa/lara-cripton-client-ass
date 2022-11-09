import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard';

const Reviews = () => {
  const [reviews,setReviews]=useState([])
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  if(reviews.length === 0){
    return <div className='h-screen flex justify-center items-center'>
      <div>
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        What people say about <span className='text-pink-600'>Lara Cripton</span>
      </h1>
       <h1 className='text-red-500 text-2xl text-center'>No reviews yet </h1>  
      </div>
     </div> 
  }
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className="text-4xl text-blue-900 font-semibold my-12 text-center">
        What people say about <span className='text-pink-600'>Lara Cripton</span>
      </h1>
      <div className='grid lg:grid-cols-3 gap-8'>
      
      {
        reviews.map(review=><ReviewCard key={review._id} review={review} ></ReviewCard>)
      }
     
    </div>
   </div>
  );
};

export default Reviews;