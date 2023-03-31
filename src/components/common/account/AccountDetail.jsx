import React from "react";
import { Dialog } from "@mui/material";

function AccountDetail({ openAccountDetail, closeAccountDetail, user }) {

    return (
        <>
            <Dialog
                maxWidth="lg"
                fullWidth
                open={openAccountDetail}
                onClose={closeAccountDetail}
            >
                <div className="rounded-2xl bg-violet-50 p-4">
                    <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">Account Details</h3>
                    <p className="mt-3 mb-3 text-black/80"><span className="font-bold">Full Name: </span>{user.full_name}</p>
                    <h3 className="mb-3 "><span className="font-bold">Username:</span> {user.username}</h3>
                    <h3 className="mb-3 "><span className="font-bold">Phone Number:</span> {user.phone_number}</h3>
                    {<h3 className="mb-3 "><span className="font-bold">Email Address:</span> {user.email ? `${user.email}` : "No Email Found"}</h3>}
                </div>
            </Dialog>
        </>
    );
}

export default AccountDetail;
