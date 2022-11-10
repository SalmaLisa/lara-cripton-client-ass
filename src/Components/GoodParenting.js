import React from "react";
import bannerImg from "../assets/mother-child.png";
import "../Styles/homepage.css";

const GoodParenting = () => {
  return (
    <div className="bannerImg relative">
      <img className="h-full" src={bannerImg} alt="" />
      <div className="bg-black w-full h-full absolute top-0 opacity-50 "></div>
      <div
        style={{ fontFamily: "'Lora', serif" }}
        className="absolute md:top-40 top-10 md:left-32 left-5 text-white"
      >
        <h1 className="md:text-5xl  text-3xl ">
          Become a Friend to <br /> Your Child, not an <br />
          Enemy!
        </h1>
        <div className="flex md:items-center md:flex-row flex-col mt-20">
          <p className="md:text-2xl text-xl mb-5 md:mb-0 ">Need Advice ?</p>
          <button
            style={{ fontFamily: "'Rubik', sans-serif" }}
            className="uppercase bg-amber-300 text-blue-900 font-bold md:px-8 px-4 py-4 md:ml-12"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodParenting;
