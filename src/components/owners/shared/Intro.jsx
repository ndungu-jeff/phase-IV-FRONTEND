import React from "react";
import Footer from "../../common/Footer";
import { NavLink } from "react-router-dom";
function Intro() {
  return (
    <>
      <div className="lg:px-20 md:px-6 px-4 md:py-12 mb-4">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/3">
            <h1 className="text-2xl font-semibold leading-9 text-gray-400 dark:text-black">
              Turn your House into a business
            </h1>
            <p className="text-base leading-6 mt-4 text-l-600 dark:text-black">
              List your house for free and make returns on rentals
            </p>
            <button
              role="button"
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-black flex items-center"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <NavLink to="/owner/new-listing">List Your House</NavLink>
              </button>

            </button>
          </div>
          <div className="lg:w-7/12 lg:mt-10 mt-8">
            <div className="w-full h-full bg-red-200">
              <img
                src="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="bnb"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Intro;