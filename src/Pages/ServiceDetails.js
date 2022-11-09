import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import AddReview from "../Components/AddReview";
import DisplayReview from "../Components/DisplayReview";
import PriceCard from "../Components/PriceCard";
import Sidebar from "../Components/Sidebar";
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const service = useLoaderData();
  const { title, img, price, desc, objectives, desc2 } = service;
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100 w-11/12 mx-auto ">
      <div className="container grid gap-8 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6 ">
        <div className=" xl:col-span-2 ">
          <div className="w-full px-4 pb-8 pt-12  sm:px-12 md:px-8 xl:col-span-2 bg-cyan-700 opacity-70  text-white ">
            <div className="">
              <h2 className="text-2xl font-semibold uppercase text-left mb-4 ml-4">
                Services
              </h2>
              <div>
                {services.map((service) => (
                  <Sidebar key={service._id} service={service}></Sidebar>
                ))}
              </div>
            </div>
          </div>
          <PriceCard title={title} price={price}></PriceCard>
        </div>
        <div className="object-cover xl:col-span-4 dark:bg-gray-500 ">
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                style={{ height: "450px" }}
                src={img}
                alt=""
                className="w-full"
              />
            </PhotoView>
          </PhotoProvider>

          <h1 className="text-4xl font-bold my-6 text-left">{title}</h1>
          <p className="mt-5 text-justify text-xl">{desc}</p>
          <div className="text-left my-4 text-xl font-semibold">
            {objectives?.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </div>
          <p className="text-justify text-xl">{desc2}</p>
        </div>
      </div>
      <DisplayReview serviceId={service._id}></DisplayReview>
      <AddReview service={service}></AddReview>
    </section>
  );
};

export default ServiceDetails;
