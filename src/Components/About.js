import React from "react";
import author from "../assets/about_img.jpg";

const About = () => {
  return (
    <div className=" ">
      <div className="pt-24 ">
        <h1 className="text-5xl font-semibold lg:text-5xl text-center text-blue-900">
        Living Full Happy Life!
        </h1>
        <p className="uppercase text-xl text-cyan-600 text-center mt-6">
        AVAILABLE IN-PERSON OR VIA SKYPE
        </p>
      </div>
      <div className="hero min-h-screen w-8/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={author} className=" shadow-2xl" alt="" />
          <div>
            <p style={{ fontFamily: "'Lora', serif" }} className="p-9  text-xl text-gray-500 ">
              <span className="text-pink-600 font-bold"> 
                <span className="text-9xl ">H</span>ello! I’m Lara Cripton
              </span><br />
              Positive behavioral supports is a behavior management system used
              to understand what maintains an individual’s challenging behavior.
              People’s inappropriate behaviors are difficult to change because
              they are functional..
            </p>
            <button
              style={{ fontFamily: "'Rubik', sans-serif" }}
              className="uppercase bg-amber-300 text-blue-900 font-bold px-8 py-3 ml-8"
            >
              Find out more
            </button>
            <p className="uppercase text-xl text-cyan-600 ml-9  mt-6">
        Call Now
        </p>
            <p className="uppercase text-3xl text-blue-900 ml-9  mt-5">
            800-456-7890
        </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
