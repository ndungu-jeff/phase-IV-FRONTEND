import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


// functions
import { editOwnerAccount } from "../../../api/owner/owner";
import { fetchOwner } from "../../../api/owner/owner";

// styling
import CustomSnackbar from "../CustomSnackbar";
import { Dialog } from "@mui/material";
import { selectCurrentOwnerDetail, setCurrentOwnerDetail } from "../../../features/owners/ownersSlice";

function EditOwnerAccountDetail({
    user,
    openEditAccountDetail,
    closeEditAccountDetail,
    setOpenEditAccountDetail
}) {
    let owner_id = user.id
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        full_name: "",
        username: "",
        email: "",
        phone_number: 254722000000,
        password: "",
        password_confirmation: "",

        snackbarMessage: "",
        openSnackbar: false,
        snackbarSeverity: "success",
    });
    const {
        full_name,
        username,
        phone_number,
        password,
        password_confirmation,
        email,

        snackbarMessage,
        openSnackbar,
        snackbarSeverity,
    } = values
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [key]: value,
        });

    }
    function handleSubmit(e) {
        e.preventDefault();
        return editOwnerAccount(            
            owner_id,
            full_name,
            username,
            phone_number,
            password,
            password_confirmation,
        ).then((res) => {
            if (res.status == 200) {
                console.log("Account updated")
                fetchOwner(owner_id).then((res) => {
                    dispatch(setCurrentOwnerDetail({ currentOwnerDetail: res.data }))
                    // setOpenEditAccountDetail(false)
                    closeEditAccountDetail
                })                
                navigate("/owner/dashboard")
            } else {
                console.log(res.data.message);
            }
        });
    }

    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setValues({ ...values, openSnackbar: false });
    };

    useEffect(() => {
        const {
            full_name,
            username,
            phone_number,
            password,
            password_confirmation,
        } = user;
        setValues({
            ...values,
            full_name,
            username,
            phone_number,
            password,
            password_confirmation,

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
                open={openEditAccountDetail}
                onClose={closeEditAccountDetail}
            >
                {/* <Navigation /> */}
                <CustomSnackbar
                    openSnackbar={openSnackbar}
                    handleClose={closeSnackbar}
                    snackbarMessage={snackbarMessage}
                    snackbarSeverity={snackbarSeverity}
                />
                <div className="pb-5">
                    <div className="container max-w-screen-lg mx-auto pt-2">
                        <div className="bg-white rounded shadow-lg  px-4 md:p-8 mb-6">Edit Account Details: Fill in the details you wish to edit below</div>         <div>
                            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">

                                    <div className="lg:col-span-2">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                                <div className="md:col-span-2">
                                                    <label for="full_name"> Name</label>
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
                                                    <label for="username">Username</label>
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
                                                            Edit Account Detail
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
                {/* <Footer /> */}
            </Dialog>
        </>
    );
}

export default EditOwnerAccountDetail;
