import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../Hooks/useTitle';
const AddService = () => {
  useTitle('Add Service')
  const handleAddService= (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.photoURL.value;
    const desc = form.desc.value;
    const price = form.price.value;
    const newService = {
      title,
      price:`$${price}`,
      img,
      desc
    };
    console.log(newService)
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("service successfully added")
        }
        form.reset();
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <section className="lg:w-2/3 mx-auto">
      
      <form
        onSubmit={handleAddService}
        className="container flex flex-col mx-auto mt-12 space-y-12 text-left"
      >
        <fieldset className=" shadow-sm dark:bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3 ">
              <label
                htmlFor="title"
                className="text-sm font-semibold mb-1 block"
              >
                Service Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder='Service Title'
                className="w-full border border-cyan-400 p-3 focus:outline-none"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-semibold mb-1 block"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                placeholder='Price'
                className="w-full border border-cyan-400 p-3 focus:outline-none "
               
              />
            </div>
            <div className="col-span-full ">
              <label
                htmlFor="photo"
                className="text-sm font-semibold mb-1 block"
              >
                Service Photo URL
              </label>
              <input
                id="photo"
                type="url"
                name="photoURL"
                placeholder="http://examplephoto.png"
                className="w-full border border-cyan-400 p-3 focus:outline-none"
                required
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="desc"
                className="text-sm font-semibold mb-1 block"
              >
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                placeholder="Description"
                className="w-full border border-cyan-400 p-3 focus:outline-none h-36"
                required
              ></textarea>
            </div>
            <div className="col-span-full">
              <div className="flex items-center space-x-2">
                <button
                  type="submit"
                  className="px-12 py-3 border rounded-md bg-gradient-to-bl from-pink-400  via-pink-600 to-pink-400 text-white font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddService;