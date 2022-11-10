import React from "react";
import bannerImg from "../assets/banner.png";
import { MdEmail } from "react-icons/md";
import '../Styles/homepage.css'

const Banner = () => {
  return (
    <div className="">
      <div className="bannerImg relative">
        <img className="h-full" src={bannerImg} alt="" />
        <div className="bg-black w-full h-full absolute top-0 opacity-30 "></div>
        <div
          style={{ fontFamily: "'Lora', serif" }}
          className="absolute md:top-40 top-10 md:left-32 left-5 text-white"
        >
          <h1 className="md:text-5xl  text-3xl ">
            Discover the Secret of <br/> Living a Life with <br/> Passion !
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
      <div className="bg-blue-900 md:p-12 p-5">
        <div className=" mx-auto flex items-center flex-col md:flex-row md:w-5/6">
          <div>
            <p className="flex items-center">
              <span className="text-blue-900 bg-white md:p-4 p-3 block md:w-16 w-12 rounded-full">
                <MdEmail className="md:text-3xl text-2xl"></MdEmail>
              </span>
              <span className="text-white md:text-3xl text-xl uppercase ml-4">
                Stay in touch with updates!
              </span>
            </p>
          </div>
          <div>
            <div className="text-xl flex items-center mt-5 md:mt-0 ">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="p-3 px-5 md:ml-8 md:w-96"
              />
              <span className=" px-5 py-3  bg-pink-600 text-gray-100 font-bold">
                Submit
              </span>
            </div>
          </div>
        </div>
        <div className="text-xl flex justify-end items-center md:w-5/6 mx-auto md:mt-2 my-4 ">
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
