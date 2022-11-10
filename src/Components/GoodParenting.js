import React from 'react';
import bannerImg from '../assets/mother-child.png'

const GoodParenting = () => {
  return (
    <div className="relative">
        <img src={bannerImg} alt="" />
        <div className="bg-black w-full h-full absolute top-0 opacity-50 "></div>
        <div
          style={{ fontFamily: "'Lora', serif" }}
          className="absolute top-40 left-32 text-white"
        >
        <h1 className="text-5xl   ">
        Become a Friend to <br /> Your Child, not an <br /> Enemy!
           
          </h1>
          <div className="flex items-center mt-20">
            <p className="text-2xl ">Need Advice ?</p>
            <button
              style={{ fontFamily: "'Rubik', sans-serif" }}
              className="uppercase bg-pink-600 text-white font-bold px-8 py-4 ml-12"
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
  );
};

export default GoodParenting;
