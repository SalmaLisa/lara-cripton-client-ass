import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewRow = ({ review, handleDelete }) => {
  const { _id, serviceTitle, email, photoURL, message, currentDate, rating } =
    review;

  return (
    <>
      <tr className="border">
        <th>
          <label
            onClick={() => handleDelete(_id)}
            title="Delete"
            className="p-1 bg-base-200 rounded cursor-pointer"
          >
            ❌
          </label>
        </th>
        <span className="grid lg:grid-cols-12">
          <td className="md:col-span-4 ">
            <span className="flex flex-col md:flex-row items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-circle rounded w-32 h-32 ">
                  <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{serviceTitle}</div>
                <div className="text-sm opacity-50">{currentDate}</div>
              </div>
            </span>
          </td>
          <td className=" col-span-4  flex items-center">
            <span>{message}</span>
          </td>
          <td className="col-span-3 flex items-center">
            <span>
              <span>{email}</span>
              <span className="flex items-center space-x-2 dark:text-yellow-500">
                <FaStar className="text-orange-500"></FaStar>
                <span className=" font-semibold">{rating}</span>
              </span>
            </span>
          </td>
          <th className="col-span-1 flex items-center">
            <Link to={`/editReview/${_id}`}>
              <button className="bg-gradient-to-br from-pink-300 to-teal-200 py-1 px-5 rounded">
                Edit
              </button>
            </Link>
          </th>
        </span>
      </tr>
    </>
  );
};

export default MyReviewRow;
