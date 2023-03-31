import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { setCurrentClientDetail } from "../../features/clients/clientSlice";

import { logInOwner } from "../../api/owner/owner";
import CustomSnackbar from "./CustomSnackbar";

function ClientLogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({        
        username: "",
        password: "",

       snackbarMessage: "",
        openSnackbar: false,
        snackbarSeverity: "success",
    });

    const {
      username,
      password,

      snackbarMessage,
    openSnackbar,
    snackbarSeverity,
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
        return logInOwner(
          username,
          password
        ).then((res) => {
          if (res.status === 201 || res.status === 200) {
            setFormData({
                ...formData,
                snackbarMessage: "Welcome To Happy stays! Log in Sucsess",
                openSnackbar: true,
                snackbarSeverity: "success",
            });
            dispatch(setCurrentClientDetail({currentClientDetail: res.data}))
            navigate("/client/dashboard")       
          } else {
            setFormData({
                ...formData,
                snackbarMessage: res.data.error,
                openSnackbar: true,
                snackbarSeverity: "error",
            });
          }
        });
    }
    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setFormData({ ...formData, openSnackbar: false });
    };


    //  TODO: DISPATCH LOGGING IN USER AS CURRENT
  return (
    <>
      <Navigation />
      <CustomSnackbar
          openSnackbar={openSnackbar}
          handleClose={closeSnackbar}
          snackbarMessage={snackbarMessage}
          snackbarSeverity={snackbarSeverity}
        />

      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://images.pexels.com/photos/97083/pexels-photo-97083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={username}
                  name="username"
                  placeholder="jane_doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  minlength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2">
                <Link
                  to="/"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <p className="mt-8">
              Need an account?{" "}
              <Link
                to="/client/register"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientLogIn;
