import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./shared/NavBar";

// import { selectCurrentClientDetails } from "../../features/clients/clientSlice";

function ClientDetails() {
  const [values, setValues] = useState(
    {
      full_name: "",
    username: "",
    email: "",
    phone_number: "",
    }
  )
  const {
    full_name,
    username,
    phone_number,
    email,
  } = values

  // const currentClientDetails = useSelector(selectCurrentClientDetails)
  console.log(currentClientDetails)
  // prepopulate our form with data in state
  useEffect( () => {
    const {
      full_name,
    username,
    phone_number,
    email,
    } = currentClientDetails
    setValues({
      ...values,
      full_name,
    username,
    phone_number,
    email,
    })
  }, []);
  return (
    <>
    <NavBar/>
      <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              for="first_name"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Full Name
            </label>
            <input
              id="full_name"
              type="text"
              name="full_name"
              value={full_name}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <label
              for="username"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              User Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <label
              for="email"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
            <label
              for="phone_number"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Phone Number
            </label>
            <input
              id="phone_number"
              type="text"
              name="phone_number"
              value={phone_number}
              readOnly={true}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default ClientDetails;
