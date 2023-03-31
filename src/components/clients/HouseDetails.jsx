import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentHouseDetail } from "../../features/houseSlice";
import { selectCurrentClientDetail } from "../../features/clients/clientSlice";

import { Dialog } from "@mui/material";

import { bookHouse } from "../../api/client/client";
import CustomSnackbar from "../common/CustomSnackbar";
import { Navigate, useNavigate } from "react-router-dom";

function HouseDetails({
  openHouseDetails,
  closeHouseDetails,
  user,
}) {
  console.log(user)
  const currentHouseDetails = useSelector(selectCurrentHouseDetail);
  const navigate = useNavigate()
  const currentClientDetails = useSelector(selectCurrentClientDetail);
  let client_id = currentClientDetails.id;
  let house_id = currentHouseDetails.id;
  let owner_id = currentHouseDetails.owner_id;
  const [values, setValues] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    image_url: "",
    owner_id: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const {
    name,
    location,
    description,
    price,
    image_url,

    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  function handleBookHouse() {
    console.log("client~> ", client_id, "house ~>", house_id, "owner ~>", owner_id);
    return bookHouse(client_id, house_id, owner_id).then((res) => {
      if (res.status === 201) {
        setValues({
          ...values,
          snackbarMessage: "House booked Successfully!",
          openSnackbar: true,
          snackbarSeverity: "success",
        });
        navigate("/client/stays")
      } else {
        setValues({
          ...values,
          snackbarMessage: res.data.message,
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
    setValues({ ...values, openSnackbar: false });
  };

  // pre-populate our form with data,in state
  useEffect(() => {
    const { name,
      location,
      description,
      price,
      image_url,
    } = currentHouseDetails;
    setValues({
      ...values,
      name,
      location,
      description,
      price,
      image_url,

      snackbarMessage,
      openSnackbar,
      snackbarSeverity,
    });
  }, []);
  return (
    <>
      <Dialog
        maxWidth="lg"
        fullWidth
        open={openHouseDetails}
        onClose={closeHouseDetails}
      >
        <CustomSnackbar
          openSnackbar={openSnackbar}
          handleClose={closeSnackbar}
          snackbarMessage={snackbarMessage}
          snackbarSeverity={snackbarSeverity}
        />
        <div className="flex  min-h-screen place-items-center">
          <div className="p-5">
            <img
              src={image_url}
            />
          </div>

          <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <div>
              <div className="w-full max-w-xl rounded-2xl bg-violet-50 p-4">
                
                  <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">{name}</h3>
                  <p className="mt-3 mb-3 text-black/80"><span className="font-bold">Features: </span>{description}</p>
                  <h3 className="mb-3 "><span className="font-bold">Location:</span> {location}</h3>
                  <h3 className="mb-3 "><span className="font-bold">Price:</span> {price}$</h3>
                
              </div>
            </div>
            {user === "client" ? <button
              onClick={handleBookHouse}
              class="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded"
            >
              Book
            </button> : <></>}
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default HouseDetails;
