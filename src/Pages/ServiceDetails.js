import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import AddReview from "../Components/AddReview";
import PriceCard from "../Components/PriceCard";
import Sidebar from "../Components/Sidebar";
import "react-photo-view/dist/react-photo-view.css";
import { useTitle } from "../Hooks/useTitle";
import { AuthContext } from "../Contexts/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const service = useLoaderData();
  const { title, img, price, desc, objectives, desc2 } = service;

  const [treatment, setTreatment] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(treatment);
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day < 10 ? "0" + day : day}/${
    month < 10 ? "0" + month : month
  }/${year}`;

  useEffect(() => {
    fetch("https://lara-cripton-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useTitle("Service Details");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const bookingInfo = {
      treatment: treatment.name,
      date,
      name,
      email,
      phone,
    };

    fetch("https://lara-cripton-server.vercel.app/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "appointment successful ! ",
            text: " Your time is 8:00 pm",
          });
          form.reset();
          setTreatment(null);
        } else {
          toast.error(data.message);
        }
      });
  };
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
          <PriceCard
            title={title}
            price={price}
            service={service}
            setTreatment={setTreatment}
          ></PriceCard>
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
      <AddReview service={service}></AddReview>
      {/*booking modal */}
      {treatment && (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="booking-modal"
                className="bg-cyan-700 py-1 px-2 font-bold text-white rounded-full absolute right-2 top-2"
              >
                ✕
              </label>
              <h2 className=" font-bold text-2xl mb-8 text-cyan-700">
                {treatment.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={date}
                  className="w-full rounded-md py-3 px-5 border border-gray-300 text-gray-900 text-xl font-semibold bg-base-200 "
                  disabled
                />

                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Full Name"
                  className="w-full rounded-md py-3 px-5 border border-gray-300 text-gray-900 text-xl"
                  required
                />
                <input
                  name="email"
                  type="text"
                  defaultValue={user?.email}
                  className="w-full rounded-md py-3 px-5 border border-gray-300 text-gray-900 text-xl bg-base-200"
                  disabled
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-md py-3 px-5 border border-gray-300 text-gray-900 text-xl"
                  required
                />

                <input
                  type="submit"
                  value="Submit"
                  className="w-full py-3 rounded-lg bg-cyan-700 text-white font-bold"
                />
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ServiceDetails;
