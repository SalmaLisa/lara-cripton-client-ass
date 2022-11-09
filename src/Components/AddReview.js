import React from 'react';
import { useContext } from 'react';

const AddReview = () => {
  
  return (
    <section>
      <h1 className='text-4xl text-blue-900 font-semibold my-12'>Let us know what you think about us</h1>
	<form className="container flex flex-col mx-auto space-y-12 text-left">
		
		<fieldset className=" shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm font-semibold mb-1 block">Email</label>
					<input id="email" type="text" placeholder="Username" className="w-full border border-cyan-400 p-3 focus:outline-none " />
				</div>
				<div className="col-span-full sm:col-span-3 ">
					<label htmlFor="website" className="text-sm font-semibold mb-1 block">Photo URL</label>
					<input id="website" type="text" placeholder="Photo URL" className="w-full border border-cyan-400 p-3 focus:outline-none" />
				</div>
				<div className="col-span-full">
					<label htmlFor="message" className="text-sm font-semibold mb-1 block">Message</label>
              <textarea id="message" placeholder="Your Message" className="w-full border border-cyan-400 p-3 focus:outline-none h-36 "></textarea>
              <div className='flex items-center'>
                <span className='font-bold text-xl mr-4 my-5'>Rate Us : </span>
              <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-600" />
</div>
              </div>
				</div>
				<div className="col-span-full">
					
					<div className="flex items-center space-x-2">
						<button type="button" className="px-12 py-3 border rounded-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 text-white font-semibold">Submit</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
  );
};

export default AddReview;
