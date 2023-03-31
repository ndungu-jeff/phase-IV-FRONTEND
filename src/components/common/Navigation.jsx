import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
        </head>
        <body>
          <nav class="bg-[#005163]" className="flex items-center bg-[#005163] justify-between  h-20 shadow-2xl">
            <div className="logo">
              <h1 className="text-white   ml-4 cursor-pointer text-3xl">
                Happy Stays BnB
              </h1>
            </div>
            <ul className="flex">
              <li>
                <NavLink
                  className="text-white mr-4 bg-[#3B4876] pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
                  to="/"
                >
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white mr-4 bg-[#3B4876] pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
                  to="/about"
                >
                  <i className="fas fa-question"></i> About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white mr-4 bg-[#3B4876] pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
                  href="/"
                >
                  <i class="fas fa-reply"></i> Contact us
                </NavLink>
              </li>
            </ul>
          </nav>
        </body>
      </html>
    </>
  );
}

export default Navigation;
