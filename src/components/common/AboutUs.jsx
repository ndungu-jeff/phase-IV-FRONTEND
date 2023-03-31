import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
// import Footer from "./Footer";
function AboutUs() {
  return (
    <>
      <Navigation />
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="image"
                loading="lazy"

                height="500px"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Happy Stays is a property sharing community of revellers.
              </h2>
              <p className="mt-4 text-gray-600">
                {" "}
                Happy Stays BnB is an enthusiasts peer platform that allows revellers and
                travel enthusiasts to easily discover stays while making a cash inflow at the same time.
                By letting out their stays for a fee to other platform users, revellers are also able to access and book other Stays
                as posted by other users, thus making their staycations not only fun but also affordable and seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#005163] mx-auto overflow-hidden pb-2 px-4 sm:px-6 lg:px-8">
        <nav
          className="justify-center h-9"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <NavLink to="/aboutus" className="text-base text-white hover:text-gray-900">
              About Us
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-white hover:text-gray-900">
              Contacts
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="#" className="text-base text-white hover:text-gray-900">
              Privacy Policy
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-white">
          © 2023 HappyStays. All rights reserved.
        </p>
      </div>
    </>
  );
}
export default AboutUs;
