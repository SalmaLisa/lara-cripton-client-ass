import React from "react";
import bannerImg from "../assets/banner.png";
import { MdEmail } from "react-icons/md";

const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <img src={bannerImg} alt="" />
        <div className="bg-black w-full h-full absolute top-0 opacity-30 "></div>
        <div
          style={{ fontFamily: "'Lora', serif" }}
          className="absolute top-40 left-32 text-white"
        >
          <h1 className="text-5xl   ">
            Discover the Secret of <br /> Living a Life with <br /> Passion
          </h1>
          <div className="flex items-center mt-20">
            <p className="text-2xl ">Need Advice ?</p>
            <button
              style={{ fontFamily: "'Rubik', sans-serif" }}
              className="uppercase bg-amber-300 text-blue-900 font-bold px-8 py-4 ml-12"
            >
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 p-12">
        <div className=" mx-auto flex items-center w-5/6">
          <div>
            <p className="flex items-center">
              <span className="text-blue-900 bg-white p-4 block w-16 rounded-full">
                <MdEmail className="text-3xl"></MdEmail>
              </span>
              <span className="text-white text-3xl uppercase ml-4">
                Stay in touch with updates!
              </span>
            </p>
          </div>
          <div>
            <div className="text-xl flex items-center ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 px-5 ml-8 w-96"
              />
              <span className=" px-5 py-3  bg-pink-600 text-gray-100 font-bold">
                Submit
              </span>
            </div>
          </div>
        </div>
        <div className="text-xl flex justify-end items-center w-5/6 mx-auto mt-2 ">
          <input className="h-5 w-5" type="checkbox" />
          <p className="ml-3 mr-12 text-white">
            I have read and agree to the terms & conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
