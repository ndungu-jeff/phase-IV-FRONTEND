import React, { useState } from "react";
import { registerClient } from "../../api/client/client";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";

function RegisterClient() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email: "",
    phone_number: 254722000000,
    password: "",
    password_confirmation: "",
  });
  const {
    full_name,
    username,
    phone_number,
    password,
    password_confirmation,
    email,
  } = formData
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });

  }
  function handleSubmit(e) {
    e.preventDefault();
    return registerClient(
      full_name,
      username,
      phone_number,
      password,
      password_confirmation,
      email,
    ).then((res) => {
      if (res.status == 201) {
        console.log("Account created");
        navigate("/client")
      } else {
        console.log(res.data.message);
      }
    });
  }
  return (
    <>
      <Navigation />
      <div className="pb-5">

        <div className="container max-w-screen-lg mx-auto pt-2">
          <div className="bg-white rounded shadow-lg  px-4 md:p-8 mb-6">Client Registration: Fill in your details below to create an account</div>          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-2">
                        <label for="full_name">Enter Your Full Name</label>
                        <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={full_name}
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="username">Preffered Username</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={username}
                          placeholder="jenny"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="email">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={email}
                          placeholder="jane@mail.com"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label for="phone_number">Phone Number</label>
                        <input
                          type="number"
                          name="phone_number"
                          id="phone_number"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={phone_number}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="password">Enter Preferred Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={password}
                          placeholder="******"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label for="password_confirmation">Confirm Password</label>
                        <input
                          type="password"
                          name="password_confirmation"
                          id="password_confirmation"
                          onChange={handleChange}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={password_confirmation}
                          placeholder="******"
                        />
                      </div>
                      <div className="md:col-span-2 ">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            CREATE ACCOUNT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterClient;
