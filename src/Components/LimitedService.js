import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const LimitedService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="my-24">
        <h1 className="text-3xl font-semibold lg:text-5xl text-center text-blue-900">
          I Can Help You In Different Situations
        </h1>
        <p className="uppercase text-xl text-cyan-600 text-center mt-6">
          Following Services
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-10/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link to="/services">
        <button
          type="button"
          className="flex items-center justify-center text-xl uppercase my-16 mx-auto py-2 px-12 font-bold tracking-wide rounded-md border border-indigo-600 text-indigo-600  hover:bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 hover:text-white"
        >
          See All
        </button>
      </Link>
    </>
  );
};

export default LimitedService;
