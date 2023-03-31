import React, { useState, useEffect } from "react";
import { selectCurrentOwnerDetail } from "../../features/owners/ownersSlice";
import { useSelector } from "react-redux"
import { createHouse } from "../../api/owner/owner";
import Footer from "../common/Footer";
import { Navigate, useNavigate } from "react-router-dom";

import NavBar from "./shared/NavBar";

function PostHouse() {
  const navigate = useNavigate()
  const currentOwnerDetails = useSelector(selectCurrentOwnerDetail)
  let owner_id = currentOwnerDetails.id
  console.log(owner_id)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    location: "",
    image_url: "",
  });
  const {
    name,
    location,
    description,
    price,
    image_url,
  } = formData
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
    console.log(formData)
  }
  function handleCreateHouse(e) {
    e.preventDefault();
    return createHouse(
      name,
    location,
    description,
    price,
    image_url,
    owner_id,
    ).then((res) => {
      if (res.status == 201) {
        console.log("House created");
        navigate("/owner/properties");  
      } else {
        console.log(res.data.message);
      }
    });
  }
  return (
    <>
      <NavBar user={currentOwnerDetails}/>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            <strong> House Details</strong>
          </h1>
          <form className="mt-6" onSubmit={handleCreateHouse}>
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label
                  for="name"
                  className="block text-xs font-bold text-gray-800"
                >
                  Property Name
                </label>
                <input
                  id="name"
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={name}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label
                  for="location"
                  className="block text-xs font-bold text-gray-800 "
                >
                  Location
                </label>
                <input
                  id="location"
                  onChange={handleChange}
                  type="text"
                  name="location"
                  value={location}
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              
            </div>
            <div className="flex justify-between gap-3">
            <span className="w-1/2">
            <label
              for="price"
              className="block mt-2 text-xs font-bold text-gray-800"
            >
              Price
            </label>
            <input
              id="price"
              onChange={handleChange}
              type="number"
              name="price"
              value={price}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            </span>
            <span className="w-1/2">
             <label
              for="image_url"
              className="block mt-2 text-xs font-bold text-gray-600 "
            >
              Image Link
            </label>
            <input
              id="image_url"
              onChange={handleChange}
              type="text"
              name="image_url"
              value={image_url}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            </span>
            
            </div>
            <span className="w-1/2">
             <label
              for="description"
              className="block mt-2 text-xs font-bold text-gray-600 "
            >
              Description and amenities
            </label>
            <input
              id="description"
              onChange={handleChange}
              type="text"
              name="description"
              value={description}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            </span>
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Post Property
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostHouse;
