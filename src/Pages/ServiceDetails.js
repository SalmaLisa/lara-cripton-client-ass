import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

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
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100 w-11/12 mx-auto">
	<div className="container grid gap-8 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div style={{height:"450px"}} className="w-full px-4 pb-8 pt-12  sm:px-12 md:px-8 xl:col-span-2 bg-cyan-700 opacity-60  text-white">
          <div>
          <h2 className='text-2xl font-semibold uppercase text-left mb-4 ml-4'>Services</h2>
          <div>
          {services.map((service) => (
          <Sidebar key={service._id} service={service}></Sidebar>
        ))}
          </div>
          <div className=" px-4 pb-8 pt-12 mt-32 sm:px-12 md:px-8  bg-cyan-700  text-white">
				<div className="">
					<div className="space-y-2">
						<h4 className="text-2xl font-bold">Pro</h4>
						<span className="text-6xl font-bold">{price}
							<span className="text-sm tracking-wide">/month</span>
						</span>
					</div>
                <p className="leading-relaxed font-semibold mt-2 mb-4">{title}</p>
					<ul className="flex-1 space-y-2">
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Friendly Environment</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Enough Time</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Enough Space to talk</span>
						</li>
						<li className="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span>Client Satisfaction</span>
						</li>
					</ul>
					<button className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded mt-5 bg-pink-800 text-white hover:bg-pink-900">Take an Appointment</button>
				</div>
			</div>
          </div>
      </div>
        <div className="object-cover xl:col-span-4 dark:bg-gray-500">
          <img style={{ height: "450px" }} src={img} alt="" className='w-full' />
          <h1 className='text-4xl font-bold my-5 text-left'>{title}</h1>
          <p className='mt-5 text-justify text-xl'>{desc}</p>
          <div className='text-left my-4 text-xl font-semibold'>
            {objectives.map(obj => <li>{obj}</li>)}
          </div>
          <p className='text-justify text-xl'>{desc2}</p>
    </div>
	</div>
</section>
  );
};

export default ServiceDetails;