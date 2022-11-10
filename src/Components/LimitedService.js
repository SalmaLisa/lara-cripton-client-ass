import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const LimitedService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lara-cripton-server.vercel.app/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className=" pb-10 bg-base-200">
      <div className="py-24">
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
          className="flex items-center justify-center text-xl uppercase my-16 mx-auto py-2 px-12 font-bold tracking-wide rounded-md border  text-pink-600  bg-gradient-to-bl from-teal-200  via-pink-200 to-pink-300 hover:border-none"
        >
          See All
        </button>
      </Link>
    </div>
  );
};

export default LimitedService;
