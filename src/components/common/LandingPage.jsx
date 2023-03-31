import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
function LandingPage() {
  return (
    <>
      <Navigation/>
      <div className="relative overflow-hidden">
        <div className="bg-white sm:pt-16 lg:overflow-hidden">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-black">
                    <span className="block text-blue-600">Welcome To </span>
                    <span className="block text-black">Happy Stays BnB</span>
                  </h1>
                  <p className=" text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    At Happy Stays, we pride in providing quality yet affordable stays and in a seamless manner.
                    Post you home to find clients and similarly find stays of your preference by signing up and logging in as a 
                    home owner, a client or both!
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <button
                          className="block w-full mr-20 rounded-md bg-gray-500 py-3 px-4 font-medium text-white shadow hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          type="button"
                        >
                          <NavLink to="/owner">
                            Home Owner
                          </NavLink>
                        </button>
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button className="block w-full mr-20 rounded-md bg-violet-600 py-3 px-10 font-medium text-white shadow hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                          <NavLink to="/client">Client</NavLink>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:block">
                <img
                  className=""
                  src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
