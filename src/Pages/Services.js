import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { useTitle } from "../Hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://lara-cripton-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useTitle("Service");
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
    </>
  );
};

export default Services;
