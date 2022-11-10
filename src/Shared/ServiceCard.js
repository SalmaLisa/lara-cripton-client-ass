import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, desc } = service;
  return (
    <>
     
    <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      
      <div className="avatar w-full">
          <div className="w-52 rounded-full mx-auto">
          <PhotoProvider>
            <PhotoView src={img}>
             <img src={img} alt=""/>
            </PhotoView>
          </PhotoProvider>
          
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2 text-cyan-600">
          <h2 className="text-xl  font-semibold tracking-wide uppercase">{title}</h2>
          <p className="dark:text-gray-100">Price : {price}</p>
          <p className="dark:text-gray-100">{desc.slice(0, 100)}...</p>
        </div>
          <Link to={`/services/${_id}`}>
          <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gradient-to-tr from-pink-400 to-pink-200 text-gray-900"
        >
          View Details
        </button></Link>
      </div>
    </div>
    </>
  );
};

export default ServiceCard;
