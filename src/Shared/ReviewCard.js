import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { username, rating, message, currentDate, currentTime, photoURL } = review
  
  return (
    <div className="container flex flex-col w-full max-w-lg mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100  bg-gradient-to-br from-pink-200 to-teal-100 ">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
            <h4 className="font-bold">{username}</h4>
            <p>
            <span className="text-xs dark:text-gray-400 mr-3">{currentTime} </span>
            <span className="text-xs dark:text-gray-400">{currentDate} </span>
           </p>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<FaStar className='text-orange-500'></FaStar>
			<span className="text-xl font-bold">{rating}</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
        <p>{message}</p>
	</div>
</div>
  );
};

export default ReviewCard;